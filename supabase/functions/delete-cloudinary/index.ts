import { serve } from "https://deno.land/std@0.208.0/http/server.ts"

// 1. Define standard CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Change this to your domain in production
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  // 2. Handle the Preflight (OPTIONS) request immediately
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { publicId, resourceType } = await req.json()
    
    const cloudName = Deno.env.get('CLOUDINARY_CLOUD_NAME')
    const apiKey = Deno.env.get('CLOUDINARY_API_KEY')
    const apiSecret = Deno.env.get('CLOUDINARY_API_SECRET')

    // Basic validation to prevent crashes
    if (!publicId) throw new Error("publicId is required");

    const timestamp = Math.round(new Date().getTime() / 1000)
    const signatureRaw = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
    
    // Create SHA-1 Signature
    const signature = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(signatureRaw))
      .then(hash => Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join(''))

    const formData = new FormData()
    formData.append('public_id', publicId)
    formData.append('signature', signature)
    formData.append('api_key', apiKey!)
    formData.append('timestamp', timestamp.toString())

    // 3. Create Basic Auth header
    const authString = btoa(`${apiKey}:${apiSecret}`)
    const authHeader = `Basic ${authString}`

    // 4. Make the call to Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType || 'image'}/destroy`,
      { 
        method: 'POST', 
        body: formData,
        headers: {
          'Authorization': authHeader
        }
      }
    )

    const result = await response.json()

    // 5. Return the result with CORS headers
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    // 6. Even errors need CORS headers or the browser will hide the error message
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
