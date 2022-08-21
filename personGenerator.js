
const personGenerator = {

    // Джейсон с фамилиями
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    
    // Джейсон с Мужскими именами
    firstNameMaleJson: `{                                      
        "count": 10,
        "list": {     
            "id_1": "Артур",
            "id_2": "Никита",
            "id_3": "Иван",
            "id_4": "Дмитрий",
            "id_5": "Александр",
            "id_6": "Владислав",
            "id_7": "Михаил",
            "id_8": "Денис",
            "id_9": "Платон",
            "id_10": "Андрей"
        }
    }`,

    // VAL Добавил Json с женскими именами
    firstNameFemaleJson: `{                                    
        "count": 10,
        "list": {     
            "id_1": "Алена",
            "id_2": "Ольга",
            "id_3": "Ирина",
            "id_4": "Настя",
            "id_5": "Татьяна",
            "id_6": "Екатерина",
            "id_7": "Яна",
            "id_8": "Мария",
            "id_9": "Вера",
            "id_10": "Вероника"
        }
    }`,

    // VAL Добавил Json с отчествами
    middlenameJson: `{
        "count" : 10,
        "list" : {
            "id_1": "Иванов",
            "id_2": "Александров",
            "id_3": "Максимов",
            "id_4": "Егоров",
            "id_5": "Олегов",
            "id_6": "Андреев",
            "id_7": "Михайлов",
            "id_8": "Артемов",
            "id_9": "Сергеев",
            "id_10": "Викторов"  
        }
    }`,

    // VAL Добавил Json с данными для формироания даты рождения
    bdatesJson: `{
        "count" : 12,
        "list" : {
            "id_1": ["января", "30"],
            "id_2": ["февраля", "28"],
            "id_3": ["марта", "31"],
            "id_4": ["апреля", "30"],
            "id_5": ["мая", "31"],
            "id_6": ["июня", "30"],
            "id_7": ["июля", "31"],
            "id_8": ["августа", "31"],
            "id_9": ["сентября", "30"],
            "id_10": ["октября", "31"],
            "id_11": ["ноября", "30"],
            "id_12": ["декабря", "31"]
        }
    }`,

    // VAL Добавил Json с профессиями
    professionJson: `{
        "unisex" : {
            "1": "Разработчик",
            "2": "Дизайнер",
            "3": "Кассир",
            "4": "Врач",
            "5": "Педагог",
            "6": "Юрист",
            "7": "Экономист",
            "8": "Депутат",
            "9": "Актер",
            "10": "Ученый",
            "11": "Повар",
            "12": "Журналист",
            "13": "Инженер",
            "14": "Менеджер",
            "15": "Официант",
            "16": "Парикмахер",
            "17": "Оператор ПК",
            "18": "Писатель",
            "19": "Технолог",
            "20": "Тренер"
        },
        "male" : {
            "21": "Дальнобойщик",
            "22": "Шахтер",
            "23": "Строитель",
            "24": "Слесарь",
            "25": "Охранник",
            "26": "Пожарный",
            "27": "Военный",
            "28": "Тракторист",
            "29": "Грузчик",
            "30": "Сварщик"
        },
        "female" : {
            "21": "Воспитатель",
            "22": "Няня",
            "23": "Швея",
            "24": "Домохозяйка",
            "25": "Стюардесса",
            "26": "Медсестра",
            "27": "Секретарь",
            "28": "Уборщица",
            "29": "Маникюрша",
            "30": "Косметолог"
        }
    }`,

  

    // обнуляем пол
    Gender_Parameter: '',

    // // переменные пола были изначально
    // GENDER_MALE: 'Мужчина',
    // GENDER_FEMALE: 'Женщина',

    // Math.random - случайная генерация. Math.floor - округление. Метод общий для всех.
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    // randomValue - преобразует строки из json в объект JS с помоцью свойства JSON.parse. Метод общий для всех.
    // эта функция выбирает случайное значение из любого JSON
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    // Метод случайной генерации Пола
    //функция, которая генерирует случайный пол - при этом мы задействуем изначальные константы GENDER_MALE и GENDER_FEMALE
    randomGender: function () {
        this.randomIntNumber() == 0 ? this.Gender_Parameter = 'Мужчина' : this.Gender_Parameter = 'Женщина';
        return this.Gender_Parameter;
    },

    // Метод генерации Имени в зависимости от пола
    //Функция, которая получает пол, как аргумент и в итоге выбирает нужный JSON - "мужской" или "женский"
    randomFirstName: function () {
        if (this.Gender_Parameter == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else if(this.Gender_Parameter == 'Женщина') {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    // Метод случайной генерации Фамилии
    randomSurname: function () {

        let surname = this.randomValue(this.surnameJson);
        if (this.Gender_Parameter == 'Женщина') {
            surname += 'a';
        }
        return surname;
    },

    // VAL Метод случайной генерации отчества
    randomMiddleName: function () {
        let middlename = this.randomValue(this.middlenameJson);
        this.Gender_Parameter == 'Мужчина' ? middlename += 'ич' : middlename += 'на';
        return middlename;
    },

    // VAL Метод случайной генерации года рождения
    randomBirthDates: function () {
        let year = this.randomIntNumber(2001, 1983);
        let dateArr = this.randomValue(this.bdatesJson);
        let month = dateArr[0];
        let day = this.randomIntNumber(dateArr[1], 1) ;

        return day + ' ' + month + ' ' + year;
    },
    
    // VAL Метод случайной генерации профессий, в зависимости от пола или унисекс
    randomProfessions: function(){
        const obj = JSON.parse(this.professionJson);
        let genderProf = obj.unisex;
        if (this.Gender_Parameter == 'Мужчина'){
            genderProf = Object.assign(genderProf, obj.male);
        }
        else if(this.Gender_Parameter == 'Женщина'){
            genderProf = Object.assign(genderProf, obj.female);
        }
        
        const count = Object.keys(genderProf).length;
        
        return genderProf[this.randomIntNumber(count, 1)];
    },


    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.middlename = this.randomMiddleName();
        this.person.birthDates = this.randomBirthDates();
        this.person.professions = this.randomProfessions();
    


        return this.person;
    }
};