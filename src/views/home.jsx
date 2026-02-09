import { useState, useEffect } from 'react';

import imgLabirinto2D from '../assets/Labirinto 2D.png';
import imgMaze3D from '../assets/Maze3D.png';
import imgGarden from '../assets/garden.png';
import imgBangBang from '../assets/bang-bang.png';
import imgSinuca from '../assets/sinuca.png';
import imgFoguete from '../assets/foguete.png';
import imgAnt from '../assets/ant.png';
import imgGameOfLife from '../assets/game-of-life.png';
import imgVillage from '../assets/village.png';

const Navbar = ({ onShowAbout, onShowStats }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <i className="fas fa-gamepad text-2xl gradient-text"></i>
          <span className="text-xl font-bold">PlixGames</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#games" className="hover:text-indigo-400 transition">
            <i className="fas fa-home mr-2"></i>Início
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onShowAbout(); }} 
            className="hover:text-indigo-400 transition"
          >
            <i className="fas fa-info-circle mr-2"></i>Sobre
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onShowStats(); }} 
            className="hover:text-indigo-400 transition"
          >
            <i className="fas fa-chart-bar mr-2"></i>Stats
          </a>
        </div>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#games" className="block hover:text-indigo-400 transition">
              <i className="fas fa-home mr-2"></i>Início
            </a>
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                onShowAbout(); 
                setMobileMenuOpen(false); 
              }} 
              className="block hover:text-indigo-400 transition"
            >
              <i className="fas fa-info-circle mr-2"></i>Sobre
            </a>
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                onShowStats(); 
                setMobileMenuOpen(false); 
              }} 
              className="block hover:text-indigo-400 transition"
            >
              <i className="fas fa-chart-bar mr-2"></i>Stats
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Aqui estão todos os meus jogos em um só lugar. Explore e divirta-se!";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative overflow-hidden py-12 px-4 text-center mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-2 mb-4">
          <i className="fas fa-gamepad text-4xl md:text-5xl gradient-text text-shadow-glow mb-1"></i>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text">
            PlixGames
          </h1>
        </div>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          {displayText}
        </p>
      </div>
    </header>
  );
};

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="max-w-xl mx-auto mb-8 relative">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-4 pl-6 pr-12 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
          placeholder="Pesquisar jogos..."
          aria-label="Pesquisar jogos"
        />
        <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>
    </div>
  );
};

const GameCard = ({ game, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="game-card group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`game-image relative overflow-hidden rounded-2xl bg-gradient-to-br ${game.gradient} aspect-[16/9] flex items-center justify-center`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <img 
          src={game.image} 
          alt={game.name} 
          className="w-full h-full object-cover"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center space-x-2">
            {game.tags.map((tag, idx) => (
              <span key={idx} className={`text-xs ${tag.color} px-2 py-1 rounded-full`}>
                {tag.text}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">{game.name}</h2>
        <p className="text-gray-300 mb-6 text-sm">{game.description}</p>
        <a 
          href={game.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="play-button inline-flex items-center justify-center space-x-2 gradient-bg text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
        >
          <span>Jogar Agora</span>
          <i className={`fas fa-arrow-right transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}></i>
        </a>
      </div>
    </div>
  );
};

const NoGamesMessage = () => (
  <div className="text-center py-16">
    <div className="max-w-md mx-auto">
      <i className="fas fa-search-minus text-7xl text-gray-600 mb-6"></i>
      <h3 className="text-2xl font-bold mb-4">Nenhum jogo encontrado</h3>
      <p className="text-gray-400">
        Tente outro termo de pesquisa ou explore nossos jogos acima.
      </p>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="modal-container bg-gradient-to-b from-gray-900 to-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="gradient-bg p-6 relative">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            <i className="fas fa-times text-white"></i>
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onShowAbout, onShowStats }) => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-900 to-transparent border-t border-gray-800/50 mt-20 py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <i className="fas fa-gamepad text-indigo-500 text-xl"></i>
              <h2 className="text-xl font-bold">PlixGames</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uma biblioteca de jogos criada com dedicação, criatividade e muita paixão por desenvolvimento.
            </p>
            <p className="text-gray-500 text-xs mt-3">
              © 2026 PlixGames. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4 text-indigo-400">Navegação</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="mailto:seu-email@exemplo.com" className="hover:text-indigo-400 transition">
                  <i className="fas fa-envelope mr-2"></i>Contato
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onShowAbout(); }} 
                  className="hover:text-indigo-400 transition"
                >
                  <i className="fas fa-info-circle mr-2"></i>Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onShowStats(); }} 
                  className="hover:text-indigo-400 transition"
                >
                  <i className="fas fa-chart-bar mr-2"></i>Estatísticas
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4 text-indigo-400">Equipe do Projeto</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <i className="fas fa-user-astronaut text-indigo-400 text-lg"></i>
                <div className="flex flex-col">
                  <a 
                    href="https://www.linkedin.com/in/christianmoryah/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-indigo-400 transition font-medium"
                  >
                    Christian Moryah
                  </a>
                  <a 
                    href="https://github.com/chris-redfield" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 text-sm hover:text-indigo-300 transition"
                  >
                    <i className="fab fa-github mr-1"></i>GitHub do Chris
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-user-ninja text-indigo-400 text-lg"></i>
                <div className="flex flex-col">
                  <a 
                    href="https://www.linkedin.com/in/lucas-andrade-5511022b3/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-indigo-400 transition font-medium"
                  >
                    Lucas Andrade
                  </a>
                  <a 
                    href="https://github.com/lucas19fonseca" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 text-sm hover:text-indigo-300 transition"
                  >
                    <i className="fab fa-github mr-1"></i>GitHub do Lucas
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function PlixGames() {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalState, setModalState] = useState({ 
    isOpen: false, 
    title: '', 
    content: null 
  });

  const GAMES = [
    {
      name: 'Maze Explorer 2',
      keywords: 'maze explorer 2',
      image: imgLabirinto2D,
      gradient: 'from-indigo-600 to-purple-600',
      tags: [
        { text: '2D', color: 'bg-indigo-600' },
        { text: 'Aventura', color: 'bg-gray-800' }
      ],
      description: 'Explore labirintos desafiadores em 2D e encontre a saída!',
      url: 'https://chris-redfield.github.io/maze-explorer2'
    },
    {
      name: 'Maze Explorer 3',
      keywords: 'maze explorer 3',
      image: imgMaze3D,
      gradient: 'from-indigo-600 to-purple-600',
      tags: [
        { text: '3D', color: 'bg-blue-600' },
        { text: 'Aventura', color: 'bg-gray-800' }
      ],
      description: 'Navegue por labirintos em 3D com uma perspectiva totalmente nova.',
      url: 'https://chris-redfield.github.io/maze-explorer3'
    },
    {
      name: 'The Dark Garden of Z',
      keywords: 'dark garden',
      image: imgGarden,
      gradient: 'from-indigo-600 to-purple-600',
      tags: [
        { text: '2D', color: 'bg-indigo-600' },
        { text: 'Aventura', color: 'bg-gray-800' }
      ],
      description: 'Explore um mundo infinito nesse jogo de ação + RPG',
      url: 'https://chris-redfield.github.io/game-learning'
    },
    {
      name: 'Bang Bang',
      keywords: 'bang bang',
      image: imgBangBang,
      gradient: 'from-indigo-600 to-purple-600',
      tags: [
        { text: 'Ação', color: 'bg-red-600' },
        { text: 'Tiro', color: 'bg-gray-800' }
      ],
      description: 'Jogo de tiro rápido com muita ação e adrenalina!',
      url: 'https://chris-redfield.github.io/bang-bang'
    },
    {
      name: 'Pool',
      keywords: 'pool sinuca bilhar',
      image: imgSinuca,
      gradient: 'from-green-600 to-emerald-600',
      tags: [
        { text: 'Esporte', color: 'bg-green-600' },
        { text: 'Física', color: 'bg-gray-800' }
      ],
      description: 'Jogo de sinuca realista com física precisa e controles intuitivos!',
      url: 'https://chris-redfield.github.io/pool'
    },
    {
      name: 'Nightdrift',
      keywords: 'nightdrift foguete rocket flapbird flappy',
      image: imgFoguete,
      gradient: 'from-purple-600 to-pink-600',
      tags: [
        { text: 'Arcade', color: 'bg-purple-600' },
        { text: 'Habilidade', color: 'bg-gray-800' }
      ],
      description: 'Pilote um foguete através da noite em um desafio estilo Flappy Bird!',
      url: 'https://lucas19fonseca.github.io/Nightdrift'
    },
    {
      name: 'Ants',
      keywords: 'ants formigas insetos simulação',
      image: imgAnt,
      gradient: 'from-amber-600 to-orange-600',
      tags: [
        { text: 'Simulação', color: 'bg-amber-600' },
        { text: 'Estratégia', color: 'bg-gray-800' }
      ],
      description: 'Gerencie uma colônia de formigas e observe seu comportamento!',
      url: 'https://chris-redfield.github.io/ants'
    },
    {
      name: 'Game of life',
      keywords: 'life simulação',
      image: imgGameOfLife,
      gradient: 'from-amber-600 to-orange-600',
      tags: [
        { text: 'Simulação', color: 'bg-amber-600' },
        { text: 'Estratégia', color: 'bg-gray-800' }
      ],
      description: 'Gerencie uma colônia de bactérias e observe seu comportamento!',
      url: 'https://chris-redfield.github.io/life-of-game'
    },
    {
      name: 'Tiny Village Survive',
      keywords: 'tiny village survive sobrevivência vila aldeã estratégia',
      image: imgVillage,
      gradient: 'from-emerald-600 to-teal-600',
      tags: [
        { text: 'Sobrevivência', color: 'bg-emerald-600' },
        { text: 'Estratégia', color: 'bg-gray-800' }
      ],
      description: 'Construa e gerencie sua vila para sobreviver aos desafios!',
      url: 'https://chris-redfield.github.io/tiny-village-survive'
    }
  ];

  const filteredGames = GAMES.filter(game => 
    game.keywords.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const showAbout = () => {
    setModalState({
      isOpen: true,
      title: 'Sobre o PlixGames',
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <i className="fas fa-gamepad text-3xl gradient-text"></i>
            <h3 className="text-xl font-bold">PlixGames - Versão 2.0</h3>
          </div>
          <p className="text-gray-300">
            Hub de jogos criado com as tecnologias mais modernas para uma experiência incrível!
          </p>
          <div className="bg-gray-800/50 rounded-xl p-4 mt-6">
            <h4 className="font-bold text-indigo-400 mb-2">
              <i className="fas fa-sparkles mr-2"></i>Recursos Avançados:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span>Animações rápidas e suaves com React</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span>Design responsivo com Tailwind CSS</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span>Sistema de pesquisa em tempo real</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              <strong>Powered by:</strong> React, Tailwind CSS, Font Awesome 6.7.2
            </p>
          </div>
        </div>
      )
    });
  };

  const showStats = () => {
    setModalState({
      isOpen: true,
      title: 'Estatísticas',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold mb-4">
            <i className="fas fa-chart-line mr-2"></i>Estatísticas do PlixGames
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl p-4 text-center border border-indigo-800/30">
              <div className="text-4xl font-bold mb-2">{GAMES.length}</div>
              <div className="text-sm text-gray-300">Total de Jogos</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-4 text-center border border-blue-800/30">
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-sm text-gray-300">Categorias</div>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-sm text-gray-400">Estatísticas atualizadas em tempo real</p>
          </div>
        </div>
      )
    });
  };

  useEffect(() => {
    console.log('%c🎮 PlixGames - React Edition 🎮', 'color: #6366f1; font-size: 20px; font-weight: bold;');
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950 text-white min-h-screen font-sans antialiased">
      <style>{`
        :root {
          --accent: #6366f1;
          --accent-hover: #818cf8;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }
        
        .game-card {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .game-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>

      <Navbar onShowAbout={showAbout} onShowStats={showStats} />
      
      <div className="container mx-auto px-4 py-4" id="games">
        <Hero />
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {filteredGames.map((game, index) => (
              <GameCard key={game.name} game={game} index={index} />
            ))}
          </div>
        ) : (
          <NoGamesMessage />
        )}
      </div>

      <Footer onShowAbout={showAbout} onShowStats={showStats} />

      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        title={modalState.title}
      >
        {modalState.content}
      </Modal>
    </div>
  );
}