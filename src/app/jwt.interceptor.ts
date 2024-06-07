import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const jwt = localStorage.getItem('jwt');

  if (jwt != null) {
    const newRequest = req.clone({ setHeaders: { Authorization: jwt } });
    return next(newRequest);
  }

  throw Error(
    "A l'attention du developer : vous utiliser le service http client global , il faut un jwt dans le local storage (essayez d'utiliser httpClientModule dans les imports)",
  );
};
