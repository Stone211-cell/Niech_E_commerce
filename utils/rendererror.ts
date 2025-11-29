export const renderError = (error:unknown):{ msg :string } => {
    console.log(error)
    return { msg:  error instanceof Error ?  error.message : "have error" };
}