export interface Weather {
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: {
      main: string;
    }[];
    wind: {
      speed: number;
    };
    dt_txt: string;
    warnings: string;
  }