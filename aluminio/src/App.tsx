import React from 'react';
import { Beaker, Atom, FlaskRound as Flask, Factory, Info } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1abc9c] to-[#16a085] p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Sección del Encabezado */}
        <div className="bg-[#1abc9c] p-8 text-white">
          <div className="flex items-center gap-8">
            <img 
              src="/aluminio.jpg"
              alt="Aluminio metal"
              className="w-32 h-32 object-cover rounded-lg shadow-lg border-2 border-white/20"
            />
            <div className="flex-1 flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold">Aluminio</h1>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-2xl font-semibold">Al</span>
                  <span className="text-xl">Número Atómico: 13</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl">Masa Atómica: 26.982 u</p>
                <p>Período: 3 | Grupo: 13</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Propiedades Físicas */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Beaker className="text-[#1abc9c]" />
              Propiedades Físicas
            </h2>
            <div className="space-y-3">
              <p><strong>Estado:</strong> Sólido a temperatura ambiente</p>
              <p><strong>Apariencia:</strong> Metal blanco plateado</p>
              <p><strong>Densidad:</strong> 2.70 g/cm³</p>
              <p><strong>Punto de Fusión:</strong> 660.32°C (1220.58°F)</p>
              <p><strong>Punto de Ebullición:</strong> 2519°C (4566°F)</p>
            </div>

            {/* Propiedades Atómicas */}
            <h2 className="text-2xl font-semibold flex items-center gap-2 mt-8">
              <Atom className="text-[#1abc9c]" />
              Propiedades Atómicas
            </h2>
            <div className="space-y-3">
              <p><strong>Radio Atómico:</strong> 143 pm</p>
              <p><strong>Electronegatividad:</strong> 1.61 (escala de Pauling)</p>
              <p><strong>Energía de Ionización:</strong> 577.5 kJ/mol</p>
              <p><strong>Afinidad Electrónica:</strong> 42.5 kJ/mol</p>
            </div>
          </div>

          {/* Historia y Aplicaciones */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Flask className="text-[#1abc9c]" />
              Descubrimiento e Historia
            </h2>
            <div className="space-y-3">
              <p><strong>Descubridor:</strong> Hans Christian Ørsted</p>
              <p><strong>Año:</strong> 1825</p>
              <p><strong>Origen del Nombre:</strong> Del latín 'alumen', referente al alumbre</p>
            </div>

            <h2 className="text-2xl font-semibold flex items-center gap-2 mt-8">
              <Factory className="text-[#1abc9c]" />
              Aplicaciones Principales
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Fabricación de aeronaves y automóviles</li>
              <li>Materiales de construcción y ventanas</li>
              <li>Embalaje de alimentos y utensilios de cocina</li>
              <li>Electrónica y transmisión eléctrica</li>
            </ul>

            <div className="mt-8 bg-[#1abc9c]/10 p-4 rounded-lg">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Info className="text-[#1abc9c]" />
                Dato Curioso
              </h2>
              <p className="mt-2">
                ¡El aluminio fue considerado más precioso que el oro! En el siglo XIX, Napoleón III servía a sus invitados más honorables con cubiertos de aluminio, mientras que los invitados menos favorecidos usaban cubiertos de oro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;