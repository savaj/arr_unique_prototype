const arr1 = [
  {
    "id": 1,
    "name": "savaj Patel"
  },
  {
    "id": 2,
    "name": "sunny patel"
  }
];

const arr2 = [
      {
        "id": 1,
        "name": "savaj Patel"
      },
      {
        "id": 2,
        "name": "sunny patel"
      },
      {
        "id": 3,
        "name": "suraj patel"
      }
]


Array.prototype.unique = () => {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i].id === a[j].id)
                a.splice(j--, 1);
        }
    }

    return a;
};

const arr3 = arr1.concat(arr2).unique();
console.log(arr3);
