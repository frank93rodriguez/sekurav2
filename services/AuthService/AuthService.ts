// AuthService.ts
const AuthService = {
  login: (username: string, password: string): Promise<{ username: string }> => {
    // Aquí deberías implementar la lógica de autenticación con tu backend
    // Puedes simular una llamada a una API o realizar la lógica de autenticación aquí
    return new Promise((resolve, reject) => {
      // Simulación de lógica de autenticación
      if (username === 'admin' && password === 'admin123') {
        resolve({ username });
      } else {
        reject(new Error('Credenciales incorrectas'));
      }
    });
  },
};

export default AuthService;
