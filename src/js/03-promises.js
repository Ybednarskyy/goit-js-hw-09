const refs = {
  form: document.querySelector('.form'),
};

const args = {};

// console.log(refs.form);
refs.form.addEventListener('change', e => {
  // console.log('Target => ', e.target['name']);
  // console.log('Value => ', e.target.value);
  // console.log('Current target => ', e.currentTarget);
  args[e.target.name] = e.target.value;
  console.log(args);
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// const promise = new Promise((resolve, reject) => {
//   const isFulFill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (isFulFill) {
//       resolve('Promise is Ok ;-))');
//     }
//     reject('Promise is not Ok :-[[');
//   }, 2000);
// });

// promise.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   }
// );
