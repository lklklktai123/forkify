const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took to long!,Time out after ${s} second`));
    }, s * 1000);
  });
};

export default timeout;
