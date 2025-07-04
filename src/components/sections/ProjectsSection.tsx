'use client'

import React, { useState } from 'react'

interface Project {
  id: string
  title: string
  description: string
  technologies?: string[]
  frameworks?: string[]
  methodologies?: string[]
  image?: string
  status?: 'completed' | 'in-progress'
}

const projects: Project[] = [
  {
    id: 'kanji',
    title: 'モバイルapp向け漢字認識モデル開発',
    description: 'モバイルアプリケーション向けの漢字認識モデルを開発しました。TensorFlow/Kerasを用いて、漢字のストロークデータを解析し、画像からの認識精度を向上させるためのデータ拡張手法や転移学習を実施しました。量子化やプルーニング、蒸留技術を駆使して、モデルの軽量化と推論速度の向上も図りました。',
    frameworks: ['TensorFlow', 'Keras', 'OpenCV', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Pickle'],
    methodologies: ['データ拡張', '転移学習（比較検証）', '量子化', 'プルーニング', '蒸留', '画像処理'],
    status: 'completed'
  },
  {
    id: 'openai',
    title: 'OpenAI APIを用いた英文添削アプリケーション開発',
    description: '某英語試験の英作文採点を自動化するアプリケーションを開発しました。OpenAI APIを活用して2段階の採点プロセスを実装し、実際の採点結果との精度検証も行いました。プロンプトエンジニアリングを駆使してLLMの採点能力を最大化し、採点基準に忠実かつ教育的価値の高いフィードバックを提供できるように心がけました。',
    technologies: ['Python', 'OpenAI API'],
    methodologies: ['プロンプトエンジニアリング', 'Chain-of-Thought', 'Few-shot Learning'],
    status: 'completed'
  },
  {
    id: 'nesting',
    title: '配置最適化アルゴリズム開発',
    description: 'アクリルキーホルダーの部品を効率的に配置するためのアルゴリズムを開発しました。Bottom-Left Fillアルゴリズムをベースに、多角形パーツの最適配置問題に取り組み、計算コストを抑えるために四角形近似アプローチを採用しました。実装により、手動で配置を行なっていた従来の充填率(30%前後)と比較して充填率60%近くにまで向上させ、配置可能なパーツ数も倍近くまで増加させることに成功。処理時間も40秒以内に抑えて実用性を確保しました。',
    technologies: ['Python'],
    methodologies: ['Bottom-Left Fillアルゴリズム', '遺伝的アルゴリズム', 'NFP'],
    status: 'completed'
  },
  {
    id: 'demand',
    title: '需要予測&在庫管理システム開発',
    description: '大手メーカー商品のECサイト売上データをもとに、需要予測と発注最適化を行うToB向けシステムを開発しました。バックエンド統括として、Python/FastAPIを用いたAPI/DB設計と実装を担当し、セール状況を考慮した8週間先までの売上予測ロジックと最適在庫算出アルゴリズムを実装しました。4週間のリードタイムを考慮した自動発注提案フローを構築し、発注業務の大幅な効率化と在庫最適化に貢献することができました。',
    technologies: ['Python', 'MySQL', 'TypeScript'],
    methodologies: ['時系列分析', '需要予測', '在庫最適化', '自動発注アルゴリズム'],
    frameworks: ['FastAPI', 'Next.js', 'React', 'Tailwind CSS', 'TensorFlow', 'scikit-learn', 'SQLAlchemy'],
    status: 'completed'
  },
  {
    id: 'matching',
    title: 'マッチングアプリ風飲食店検索アプリ開発',
    description: '現在開発中のプロジェクトです。ユーザーの好みに合わせた飲食店をマッチングアプリのような形式で提案するアプリケーションを開発しています。',
    technologies: ['React Native', 'TypeScript', 'Node.js'],
    status: 'in-progress'
  }
]


export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work in software development, machine learning, and algorithm optimization
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Project Card */}
              <div className="glass-card interactive-card h-full p-6 relative overflow-hidden">
                
                {/* Status Indicator */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`
                    px-3 py-1 rounded-full text-xs font-semibold
                    ${project.status === 'in-progress' 
                      ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                      : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }
                  `}>
                    {project.status === 'in-progress' ? '開発中' : 'Completed'}
                  </div>
                </div>

                {/* Project Number */}
                <div className="absolute top-6 left-6 text-6xl font-black text-white/10 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10 pt-16">
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-glow transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* View Details Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Click to view details</span>
                    <div className={`
                      w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 
                      flex items-center justify-center transition-all duration-300
                      ${hoveredProject === project.id ? 'scale-110 rotate-12' : ''}
                    `}>
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 
                  transition-opacity duration-300
                  ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                `} />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal */}
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto glass-card p-8">
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <span className="text-white text-xl">×</span>
              </button>

              {/* Modal Content */}
              <div className="pr-12">
                <h2 className="text-3xl font-bold gradient-text mb-6">
                  {selectedProject.title}
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  {selectedProject.technologies && (
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Frameworks */}
                  {selectedProject.frameworks && (
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Frameworks & Libraries</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.frameworks.map((framework) => (
                          <span
                            key={framework}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg text-sm font-medium"
                          >
                            {framework}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Methodologies */}
                  {selectedProject.methodologies && (
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Methodologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.methodologies.map((method) => (
                          <span
                            key={method}
                            className="px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg text-sm font-medium"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}