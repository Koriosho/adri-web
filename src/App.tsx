import { Calendar, Clock, MapPin, Phone, Mail, MessageSquare, Activity, Users, Brain, Award } from 'lucide-react';
import logo from './assets/logo.png';
import fondo from './assets/fondo.png';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src={fondo}
            alt="Consultorio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Lic. Adriana Olmedo</h1>
            <p className="text-xl mb-8">Fonoaudiología: Evaluacion y Tratamiento en dificultades de la comunicación, habla y lenguaje.</p>
            <a href="#contacto" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Agendar Consulta
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Terapia del Habla</h3>
              <p className="text-gray-600">Tratamiento de trastornos de articulación, fluidez y voz.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Desarrollo del Lenguaje</h3>
              <p className="text-gray-600">Estimulación temprana y tratamiento de retrasos en el desarrollo del lenguaje.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Terapia Infantil</h3>
              <p className="text-gray-600">Atención especializada para niños con dificultades de comunicación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">¿Por qué elegir a la Fono Adri?</h2>
              <div className="space-y-4">
              <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Apoyo y Orientacion</h3>
                    <p className="text-gray-600">Apoyo y Orientacion constante a los padres.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Activity className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Tratamientos Personalizados</h3>
                    <p className="text-gray-600">Planes adaptados a las necesidades de cada paciente.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={logo}
                alt="Fono Adri"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Información de Contacto</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-gray-600">B° San Cayetano, Itaugua</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-gray-600">+595 984 884 175</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">fonoadripy@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Horarios de Atención</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <p>Lunes a Jueves: 8:00 - 18:00 (Proximamente)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <p>Sábados: 8:00 - 18:00</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Agendar Cita</h3>
                <p className="text-gray-600">
                  Llama o envia un mensaje por Whatsapp y agenda una consulta. Te espero en el consultorio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Fono Adri. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;