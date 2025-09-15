type TEvent = 'default' | 'teacherDay' | 'blackFriday';

const getDefaultPrice = (price: number) => {
    return price;
}

const getTeacherDayPrice = (price: number) => {
    return price * 0.8;
}

const getBlackFridayPrice = (price: number) => {
    return price <= 200 ? price * 0.7 : price - 30;
}

const getPriceStrategies: Record<TEvent, (price: number) => number> = {
    'default': getDefaultPrice,
    'blackFriday': getBlackFridayPrice,
    'teacherDay': getTeacherDayPrice,
}

const getPrice = (price: number, type: TEvent) => {
    console.log(getPriceStrategies[type](price));
}

getPrice(100, 'blackFriday');
getPrice(100, 'default');
getPrice(100, 'teacherDay');