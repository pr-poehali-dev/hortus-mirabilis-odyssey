import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Plant = {
  id: number;
  name: string;
  latinName: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  price: number;
  origin: string;
  description: string;
};

const mockPlants: Plant[] = [
  {
    id: 1,
    name: 'Монстера Альба',
    latinName: 'Monstera deliciosa var. albo-variegata',
    difficulty: 4,
    price: 45000,
    origin: 'Тропики Центральной Америки',
    description: 'Редкая вариегатная форма с белыми пятнами на листьях'
  },
  {
    id: 2,
    name: 'Филодендрон Розовая Принцесса',
    latinName: 'Philodendron erubescens Pink Princess',
    difficulty: 3,
    price: 12500,
    origin: 'Колумбия',
    description: 'Уникальная розово-зелёная окраска листьев'
  },
  {
    id: 3,
    name: 'Антуриум Кристаллинум',
    latinName: 'Anthurium crystallinum',
    difficulty: 5,
    price: 28000,
    origin: 'Перу, Колумбия',
    description: 'Бархатистые листья с серебристыми жилками'
  },
  {
    id: 4,
    name: 'Алоказия Драконья Чешуя',
    latinName: 'Alocasia baginda Dragon Scale',
    difficulty: 4,
    price: 18000,
    origin: 'Борнео',
    description: 'Металлические листья с текстурой драконьей чешуи'
  },
  {
    id: 5,
    name: 'Хойя Карноза Компакта',
    latinName: 'Hoya carnosa Compacta',
    difficulty: 2,
    price: 3500,
    origin: 'Австралия, Индия',
    description: 'Неприхотливая лиана с восковыми листьями'
  },
  {
    id: 6,
    name: 'Калатея Орбифолия',
    latinName: 'Calathea orbifolia',
    difficulty: 5,
    price: 8500,
    origin: 'Боливия',
    description: 'Округлые листья с серебристыми полосами'
  }
];

const teamMembers = [
  { name: 'Неклюдова Анна Александровна', role: 'Владелец' },
  { name: 'Звягинцева Алёна Алексеевна', role: 'Фитотехнолог' },
  { name: 'Сахапов Аяз Ильнурович', role: 'Флорист-консультант' },
  { name: 'Зиновьев Елисей Денисович', role: 'Флорист-консультант' },
  { name: 'Рудякова Татьяна Сергеевна', role: 'Менеджер по работе с ключевыми клиентами' }
];

const Index = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(null);

  const filteredPlants = selectedDifficulty
    ? mockPlants.filter(plant => plant.difficulty === selectedDifficulty)
    : mockPlants;

  const getDifficultyLabel = (level: number) => {
    const labels = ['Легко', 'Несложно', 'Средне', 'Сложно', 'Эксперт'];
    return labels[level - 1];
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/Снимок экрана 2025-12-15 122634.png" alt="HORTUS MIRABILIS" className="h-12" />
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#catalog" className="text-sm font-medium transition-colors hover:text-primary">Каталог</a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">О нас</a>
            <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">Услуги</a>
            <a href="#team" className="text-sm font-medium transition-colors hover:text-primary">Команда</a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">Консультация</Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Ботаническая одиссея</Badge>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-foreground">
              HORTUS⁂MIRABILIS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic">
              Сад Чудес
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Экспедиция за живым сокровищем. Научно-исследовательская станция и кабинет редкостей для ценителей эксклюзивной флоры.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="Microscope" size={18} />
                Каталог растений
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="MapPin" size={18} />
                Экспедиционный сервис
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Коллекция растений</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый экземпляр — результат ботанической экспедиции. С паспортом происхождения и индивидуальным гайдом по уходу.
            </p>
          </div>

          <div className="flex gap-2 justify-center mb-12 flex-wrap">
            <Button
              variant={selectedDifficulty === null ? 'default' : 'outline'}
              onClick={() => setSelectedDifficulty(null)}
              size="sm"
            >
              Все растения
            </Button>
            {[1, 2, 3, 4, 5].map(level => (
              <Button
                key={level}
                variant={selectedDifficulty === level ? 'default' : 'outline'}
                onClick={() => setSelectedDifficulty(level)}
                size="sm"
              >
                {getDifficultyLabel(level)}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map(plant => (
              <Card key={plant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-sage to-forest flex items-center justify-center">
                  <Icon name="Flower2" size={64} className="text-background opacity-40" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{plant.name}</h3>
                      <p className="text-sm italic text-muted-foreground">{plant.latinName}</p>
                    </div>
                    <Badge variant="secondary">
                      {getDifficultyLabel(plant.difficulty)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{plant.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Icon name="MapPin" size={14} />
                    <span>{plant.origin}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{plant.price.toLocaleString('ru-RU')} ₽</span>
                    <Button size="sm">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Философия HORTUS</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы не просто магазин растений. Мы — научно-исследовательская станция и кабинет редкостей для истинных ценителей.
              </p>
              <p className="text-muted-foreground mb-6">
                Каждое растение проходит карантин, получает индивидуальный паспорт с QR-кодом и историей происхождения. Мы работаем с питомниками Голландии, Таиланда и Эквадора, отслеживая путь каждого экземпляра от тропиков до вашей коллекции.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Редких видов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Стран-поставщиков</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sage via-muted to-forest rounded-lg p-12 flex items-center justify-center">
              <Icon name="Microscope" size={120} className="text-background opacity-30" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Compass" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Экспедиционный сервис</h3>
                <p className="text-muted-foreground mb-6">
                  Поиск редких растений под заказ. Вы заказываете экспедицию, мы находим нужный вид в питомниках мира и отправляем фотоотчёты на каждом этапе пути.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex gap-2 text-sm">
                    <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                    <span>Персональный поиск любого растения</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                    <span>Фотоотчёты из питомников</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                    <span>Карантин и адаптация</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Заказать экспедицию</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Stethoscope" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ботанический консьерж</h3>
                <p className="text-muted-foreground mb-6">
                  Годовое абонентское обслуживание для коллекционеров: диагностика, лечение, пересадка, сезонный уход на дому.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex gap-2 text-sm">
                    <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                    <span>Регулярные визиты специалиста</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                    <span>Срочная помощь 24/7</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                    <span>Индивидуальный план ухода</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Оформить абонемент</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sage to-primary mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-background" />
                  </div>
                  <h3 className="font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold mb-6">Онлайн консультация</h2>
              <p className="text-lg text-muted-foreground">
                Наши ботанические эксперты готовы ответить на ваши вопросы и помочь выбрать идеальное растение для вашей коллекции.
              </p>
            </div>
            
            <Card className="p-8">
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = {
                  name: formData.get('name'),
                  contact: formData.get('contact'),
                  message: formData.get('message')
                };
                console.log('Заявка на консультацию:', data);
                alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
                e.currentTarget.reset();
              }}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Анна Неклюдова"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact" className="text-sm font-medium">
                      Телефон или Email
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+7 (987) 079-70-61"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Ваш вопрос (необязательно)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Расскажите, какое растение вас интересует или какой вопрос вы хотели бы обсудить..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Icon name="Send" size={18} />
                    Отправить заявку
                  </Button>
                </div>
              </form>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="MessageCircle" size={18} />
                Написать в мессенджер
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Phone" size={18} />
                Позвонить напрямую
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://cdn.poehali.dev/files/Снимок экрана 2025-12-15 122634.png" alt="HORTUS MIRABILIS" className="h-10" />
              </div>
              <p className="text-sm text-muted-foreground">
                Ботаническая одиссея.<br />Экспедиция за живым сокровищем.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#catalog" className="hover:text-foreground transition-colors">Каталог</a></li>
                <li><a href="#about" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors">Услуги</a></li>
                <li><a href="#team" className="hover:text-foreground transition-colors">Команда</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Icon name="Mail" size={16} className="mt-0.5" />
                  <span>nekludovaann@gmail.com</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Phone" size={16} className="mt-0.5" />
                  <span>+7 (987) 079-70-61</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5" />
                  <span>Москва, Зеленоград, ул. Юности 9</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 HORTUS MIRABILIS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;