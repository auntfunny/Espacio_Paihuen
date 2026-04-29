import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; 

const WeatherWidgit = () => {
  const { t, i18n } = useTranslation();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const lang = t('weather.lang_code');
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=-41.53&lon=-72.74&appid=${API_KEY}&units=metric&lang=${lang}`,
        );

        setWeatherData(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [i18n.language, API_KEY, t]);

  return (
    <div className="bg-accgray/60 backdrop-blur-md p-6 rounded-3xl border border-accgray/40 shadow-lg flex flex-col gap-2 justify-center items-center text-center">
      <span className="text-xs font-bold text-accgreenlight uppercase tracking-wider">
        {t('weather.label')}
      </span>
      {error ? (
        <p className="text-acclight">{t('weather.error')}</p>
      ) : loading ? (
        <div className="w-16 h-16 border-4 border-acclight border-t-accgreenlight animate-spin rounded-full"></div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 my-2">
            <img
              src={`/weather/${weatherData?.weather[0].icon}.png`}
              alt={weatherData?.weather[0].main}
              className="w-12"
            />
            <span className="text-3xl font-bold text-acclight">
              {weatherData?.main.temp.toFixed(0)}°C
            </span>
          </div>
          <p className="text-xs text-acclight/60 italic capitalize">
            {weatherData?.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherWidgit;
