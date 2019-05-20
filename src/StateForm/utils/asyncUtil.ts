export function allPromiseFinish(promiseList: Array<Promise<any>>) {
  let hasError = false;
  let count = promiseList.length;
  const results: any[] = [];

  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise
      .catch((e) => {
        hasError = true;
        return e;
      }).then((result) => {
        count -= 1;
        results[index] = result;

        if (count !== 0) {
          return;
        }

        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}
