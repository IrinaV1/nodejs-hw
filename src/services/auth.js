import Session from '../models/session.js';
import randomUUID from 'node:crypto';
import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/time.js';

export const createSession = async (userId) =>
  Session.create({
    userId,
    accessToken: randomUUID(),
    refreshToken: randomUUID(),
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });

export const setSessionCookies = (res, session) => {
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    sameSite: 'none',
    maxAge: ONE_DAY,
  });

  res.cookie('accessToken', session.accessToken, {
    httpOnly: true,
    sameSite: 'none',
    maxAge: FIFTEEN_MINUTES,
  });

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    sameSite: 'none',
    maxAge: ONE_DAY,
  });
};

// createSession(userId) — створює access та refresh токени, створює сесію в базі даних і повертає її;
// setSessionCookies(res, session) — додає до відповіді три кукі:
// accessToken
// refreshToken
// sessionId

// При встановленні кожної кукі обов’язково використовуйте однакові параметри:

// httpOnly: true
// secure: true
// sameSite: 'none'
// maxAge: для accessToken — 15 хв, для refreshToken і sessionId — 1 день.
