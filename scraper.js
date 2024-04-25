function getMenu() {
  return fetch('https://store.dudooeat.com/order/getMenu', {
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: 'storeID=8df9f38a903c442b9f8c1589445256ca&meal_time_id=&platform=web&menuType=order&orderType=1',
    method: 'POST',
  }).then((res) => res.json())
}

const tobeShow = [
  // '注意!先看看我喔',
  '萩•浪漫基因特調',
  '單品咖啡',
  '義式咖啡',
  // '七三茶堂',
  '喝點牛奶',
  '充滿泡泡',
  // '精釀啤酒',
  '萩甜',
  '萩貨',
  '萩食',
  '精品咖啡豆',
  // 'Olend包款',
  // '脈輪療癒配方煙',
]

function organizeData(data) {
  const items = data.item.reduce((acc, i) => {
    const data = {
      id: i.item_id,
      name: i.item_name,
      photo_id: i.photo_id,
      photo_url: '//cdn.dudooeat.com/' + i.photo_id + '_t',
      intro: i.intro,
    }
    if (i.category_id in acc) {
      acc[i.category_id].push(data)
    } else {
      acc[i.category_id] = [data]
    }
    return acc
  }, {})

  const result = data.category
    .filter((i) => tobeShow.includes(i.category_name) && i.category_id in items)
    .map((i) => ({
      id: i.category_id,
      name: i.category_name,
      items: items[i.category_id],
    }))

  return result
}

getMenu().then((data) => {
  const result = organizeData(data)
  console.log(result)

  const fs = require('fs')
  // write to file: assets/menu.json
  fs.writeFileSync('./assets/menu.json', JSON.stringify(result))
})
