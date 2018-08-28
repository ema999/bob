module.exports = {

	/* ------------------- System ----------------- */

	unknownError : {
		httpStatus : 500,
		description : "Algo a salido mal."
	},

	/* -------------------- HTTP -------------------- */

	notFound : {
		httpStatus : 404,
		description : "Página no encontrada."
	},
	forbidden : {
		httpStatus : 401,
		description : "No tienes los permisos suficientes."
	},
	invalidParams : {
    httpStatus : 400,
		description : "Error en los parametros."
  },

  /* -------------------- Users -------------------- */

	userDontExist : {
    httpStatus : 404,
		description : "El usuario no existe."
  },

	userExist : {
    httpStatus : 401,
		description : "El e-mail corresponde a un usuario existente."
	}

};
