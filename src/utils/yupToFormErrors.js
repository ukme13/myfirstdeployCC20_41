export function yupToFormError(err,refs) {
  const firstErrorField = err.inner[0]?.path
  if(firstErrorField && refs[firstErrorField].current){
    refs[firstErrorField].current.focus();
  }
  const errorObj = {};
  err.inner.forEach((error) => {
    errorObj[error.path] = error.message;
  });
  return errorObj;
}
