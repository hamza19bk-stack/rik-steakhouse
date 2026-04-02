fetch('https://ibb.co/tTgWkf7n').then(r=>r.text()).then(t => console.log(t.match(/https:\/\/i\.ibb\.co\/[^\"\'\s]+/g)));
