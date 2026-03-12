export interface MenuItem {
  id: string;
  name: string;
  price: number;
  price2?: number;
  category: string;
  description?: string;
}

export const menuData: MenuItem[] = [
  // IFTAR SETS
  { id: 'set1', name: 'СЕТ 1', price: 7800, category: 'ИФТАР МЕНЮ', description: 'Суп чечевичный, Салат зеленая рапсодия, Бефстроганов говяжий (куриный), Хлебная корзина с бауырсаками, Морс ягодный | Чай классический, Штрудель' },
  { id: 'set2', name: 'СЕТ 2', price: 8700, category: 'ИФТАР МЕНЮ', description: 'Лапша домашняя с фрикадельками, Цезарь с курицей, Бифштекс из мраморной говядины, Хлебная корзина с бауырсаками, Морс ягодный | Чай классический, Пирог "Шоколадный уют"' },
  { id: 'set3', name: 'СЕТ 3', price: 7900, category: 'ИФТАР МЕНЮ', description: 'Бульон из перепелки с овощами, Салат греческий, Тай куырдақ из конины, Хлебная корзина с бауырсаками, Морс ягодный | Чай классический' },
  
  // PASTAS
  { id: 'pasta1', name: 'Феттучини Альфредо', price: 3500, category: 'ПАСТЫ' },
  { id: 'pasta2', name: 'Спагетти с морепродуктами', price: 4700, category: 'ПАСТЫ' },
  { id: 'pasta3', name: 'Спагетти Болоньезе', price: 3600, category: 'ПАСТЫ' },
  { id: 'pasta4', name: 'Спагетти Карбонара', price: 3600, category: 'ПАСТЫ' },
  { id: 'pasta5', name: 'Спагетти шпинатные в сливочном соусе', price: 3600, category: 'ПАСТЫ' },
  { id: 'pasta6', name: 'Японский удон', price: 3000, category: 'ПАСТЫ' },
  
  // PIZZA
  { id: 'pizza1', name: 'Пепперони', price: 3800, category: 'ПИЦЦА' },
  { id: 'pizza2', name: 'Маргарита', price: 3100, category: 'ПИЦЦА' },
  { id: 'pizza3', name: 'Куриная', price: 3500, category: 'ПИЦЦА' },
  { id: 'pizza4', name: 'Болоньезе', price: 4600, category: 'ПИЦЦА' },
  { id: 'pizza5', name: '4 сезона', price: 4100, category: 'ПИЦЦА' },
  
  // BURGERS
  { id: 'burger1', name: 'Бургер говяжий', price: 3800, category: 'БУРГЕРЫ' },
  { id: 'burger2', name: 'Бургер куриный', price: 3500, category: 'БУРГЕРЫ' },
  
  // SIDES
  { id: 'side1', name: 'Овощи гриль', price: 1200, category: 'ГАРНИРЫ' },
  { id: 'side2', name: 'Картофель фри', price: 1200, category: 'ГАРНИРЫ' },
  { id: 'side3', name: 'Картофельное пюре', price: 420, category: 'ГАРНИРЫ' },
  { id: 'side4', name: 'Рис', price: 450, category: 'ГАРНИРЫ' },
  
  // APPETIZERS
  { id: 'app1', name: 'Креветки жареные', price: 4400, category: 'ЗАКУСКИ' },
  { id: 'app2', name: 'Сырные палочки', price: 2500, category: 'ЗАКУСКИ' },
  { id: 'app3', name: 'Наггетсы', price: 1050, category: 'ЗАКУСКИ' },
  { id: 'app4', name: 'Мини-чебуреки', price: 2100, category: 'ЗАКУСКИ' },
  
  // BREAKFAST
  { id: 'break1', name: 'Греческий омлет', price: 3600, category: 'ЗАВТРАКИ' },
  { id: 'break2', name: 'Омлет Флоренция', price: 3100, category: 'ЗАВТРАКИ' },
  { id: 'break3', name: 'Деревенский завтрак', price: 2900, category: 'ЗАВТРАКИ' },
  { id: 'break4', name: 'Турецкий завтрак', price: 2600, category: 'ЗАВТРАКИ' },
  { id: 'break5', name: 'Каша рисовая', price: 1700, category: 'ЗАВТРАКИ' },
  { id: 'break6', name: 'Каша овсяная', price: 1600, category: 'ЗАВТРАКИ' },
  { id: 'break7', name: 'Вареники домашние с картофелем', price: 1500, category: 'ЗАВТРАКИ' },
  
  // COFFEE
  { id: 'coffee1', name: 'Латте 250 мл', price: 1190, category: 'КОФЕ' },
  { id: 'coffee2', name: 'Капучино 300 мл', price: 1190, category: 'КОФЕ' },
  { id: 'coffee3', name: 'Капучино 400 мл', price: 1400, category: 'КОФЕ' },
  { id: 'coffee4', name: 'Американo 300 мл', price: 1090, category: 'КОФЕ' },
  { id: 'coffee5', name: 'Американo 400 мл', price: 1300, category: 'КОФЕ' },
  { id: 'coffee6', name: 'Эспрессо 35 мл', price: 790, category: 'КОФЕ' },
  { id: 'coffee7', name: 'Двойной эспрессо 70 мл', price: 1090, category: 'КОФЕ' },
  { id: 'coffee8', name: 'Раф классический 300 мл', price: 1400, category: 'КОФЕ' },
  { id: 'coffee9', name: 'Раф классический 400 мл', price: 1600, category: 'КОФЕ' },
  { id: 'coffee10', name: 'Кофе на альтернативном молоке 300 мл', price: 1890, category: 'КОФЕ' },
  
  // TEA
  { id: 'tea1', name: 'Чёрный', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea2', name: 'Ташкентский', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea3', name: 'Имбирный', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea4', name: 'Чай с облепихой', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea5', name: 'Чай с душицей', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea6', name: 'Зелёный', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea7', name: 'Марокканский', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea8', name: 'Ягодный', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea9', name: 'Малиновый', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea10', name: 'Карак-чай', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea11', name: 'Чай с молоком и тары', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea12', name: 'Чай каркаде', price: 2300, category: 'ЧАЙ (1L)' },
  { id: 'tea13', name: 'Молоко (100 мл)', price: 250, category: 'ЧАЙ (1L)' },
  { id: 'tea14', name: 'Лимон (4 дольки)', price: 300, category: 'ЧАЙ (1L)' },
  { id: 'tea15', name: 'Мёд (80 грамм)', price: 300, category: 'ЧАЙ (1L)' },
  
  // LEMONADES
  { id: 'lem1', name: 'Манго-маракуя', price: 1200, price2: 2400, category: 'ЛИМОНАДЫ' },
  { id: 'lem2', name: 'Цитрусовый', price: 1200, price2: 2400, category: 'ЛИМОНАДЫ' },
  { id: 'lem3', name: 'Мохито', price: 1200, price2: 2400, category: 'ЛИМОНАДЫ' },
  { id: 'lem4', name: 'Клубничный', price: 1200, price2: 2400, category: 'ЛИМОНАДЫ' },
  { id: 'lem5', name: 'Дюшес', price: 1200, price2: 2400, category: 'ЛИМОНАДЫ' },
  { id: 'lem6', name: 'Киви-маракуя', price: 1200, price2: 2400, category: 'ЛИМОНАДЫ' },
  { id: 'lem7', name: 'Тропический', price: 1200, price2: 2400, category: 'ЛИМОНАДЫ' },
  { id: 'lem8', name: 'Ягодный', price: 1200, price2: 2400, category: 'ЛИМОНАДЫ' },
  { id: 'lem9', name: 'Айс ти', price: 900, price2: 1800, category: 'ЛИМОНАДЫ' },
  { id: 'lem10', name: 'Карибский мохито', price: 1200, price2: 2400, category: 'ЛИМОНАДЫ' },
  { id: 'lem11', name: 'Тархун', price: 1200, price2: 2400, category: 'ЛИМОНАДЫ' },
  
  // FRESH JUICES
  { id: 'fresh1', name: 'Апельсин', price: 2100, category: 'ФРЕШИ (0.3L)' },
  { id: 'fresh2', name: 'Яблоко', price: 1900, category: 'ФРЕШИ (0.3L)' },
  { id: 'fresh3', name: 'Яблоко-морковь', price: 1900, category: 'ФРЕШИ (0.3L)' },
  { id: 'fresh4', name: 'Морковь', price: 1900, category: 'ФРЕШИ (0.3L)' },
  
  // SMOOTHIES
  { id: 'smooth1', name: 'Ягодный', price: 1800, category: 'СМУЗИ (0.4L)' },
  { id: 'smooth2', name: 'Киви-манго', price: 2100, category: 'СМУЗИ (0.4L)' },
  { id: 'smooth3', name: 'Банан-малина', price: 2100, category: 'СМУЗИ (0.4L)' },
  { id: 'smooth4', name: 'Цитрусовый', price: 2000, category: 'СМУЗИ (0.4L)' },
  { id: 'smooth5', name: 'Молочный', price: 2000, category: 'СМУЗИ (0.4L)' },
];

export const categories = [
  'ИФТАР МЕНЮ',
  'ПАСТЫ',
  'ПИЦЦА',
  'БУРГЕРЫ',
  'ГАРНИРЫ',
  'ЗАКУСКИ',
  'ЗАВТРАКИ',
  'КОФЕ',
  'ЧАЙ (1L)',
  'ЛИМОНАДЫ',
  'ФРЕШИ (0.3L)',
  'СМУЗИ (0.4L)',
];
