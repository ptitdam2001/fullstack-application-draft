export const getAuth = ({ authState }: any) => {
  if (!authState) {
    const sessionId = localStorage.getItem('sessionId');
    // const refreshToken = localStorage.getItem('refreshToken');
    if (sessionId ) {
      return sessionId;
    }
    return null;
  }

  return null;
};
