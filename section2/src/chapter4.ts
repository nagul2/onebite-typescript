// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// type User = {}
function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "너구리",
  nickname: "gul",
  birth: "2000.01.07",
  bio: "안녕하세요",
  location: "서울시4",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winter",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
//   UnitedKingdom: string;
//   // (... 약 100개의 국가)
//   Brazil : string
// };

// let countryCodes: CountryCodes = {
//   Korea: "ko",
//   UnitedState: "us",
//   UnitedKingdom: "uk",
//   // (... 약 100개의 국가)
//   Brazil : 'bz'
// };

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil: "bz",
};

type CountryNumberCodes = {
  [key: string]: number;
  //   korea: string; // 오류발생
};

// let countryNumberCodes: CountryNumberCodes = {};
