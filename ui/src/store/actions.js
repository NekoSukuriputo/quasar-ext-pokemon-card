export const getData = async ({ getters }) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      return 'Action'
    })
  })
};
