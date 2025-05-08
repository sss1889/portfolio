import Image from "next/image";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ProjectButton from "../components/ProjectButton";
import AnimatedSection from "../components/AnimatedSection";
import LanguageWithTooltip from "../components/LanguageWithTooltip";
import linkedinIcon from "../image/icons8-linkedin-48.png";
import githubIcon from "../image/icons8-github-50.png";
import fastapiIcon from "../image/fastapi.png";
import pythonIcon from "../image/icons8-python-48.png";
import mysqlIcon from "../image/icons8-mysql-50.png";
import nextjsIcon from "../image/icons8-nextjs-48.png";
import reactIcon from "../image/icons8-react-48.png";
import typescriptIcon from "../image/icons8-typescript-48.png";
import cIcon from "../image/icons8-c++-48.png";
import golangIcon from "../image/Go.png";
import azureIcon from "../image/icons8-azure-48.png";
import dockerIcon from "../image/Docker.png";
import gitIcon from "../image/Git.png";
import googlecolabIcon from "../image/icons8-googlecolab-48.png";
import mailIcon from "../image/icons8-mail-48.png";
import markerIcon from "../image/icons8-marker-48.png";
import googletranslateIcon from "../image/icons8-googletranslate-48.png";
import ucscIcon from "../image/ucsc.png";
import kyotouniIcon from "../image/Kyoto_University.png";
import starupIcon from "../image/starup.png";

import kanjiIcon from "../image/projects/kanji_app.png";
import nestingIcon from "../image/projects/nesting.png";
import demandIcon from "../image/projects/demand.png";


export default function Home() {

  return (
    <div className="min-h-screen bg-[#EFF3F6] p-4 md:p-8">
      
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile and Summary Section */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Profile Card */}
          <AnimatedSection direction="left" className="w-full lg:w-1/4">
            <div className="bg-[#FDFBCB] text-[#227BB7] rounded-lg p-6 shadow-md h-full">
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-lg">Namiki Chikusa</h3>
                <p className="text-sm mb-4">Backend Engineer</p>
                
                <div className="space-y-2 w-full">
                  <div className="flex items-center gap-2">
                    <Image src={markerIcon} alt="Location" width={16} height={16}/>
                    <span>Kyoto, Japan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={githubIcon} alt="GitHub" width={16} height={16}/>
                    <a href="https://github.com/sss1889" target="_blank" rel="noopener noreferrer" className="hover:underline">github</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={linkedinIcon} alt="LinkedIn" width={16} height={16}/>
                    <a href="https://www.linkedin.com/in/namiki-chikusa-37b738301" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedIn</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={mailIcon} alt='mail' width={16} height={16}/> 
                    <a href="mailto:natsukirin65@gmail.com" className="hover:underline">natsukirin65@gmail.com</a>
                  </div>
                  <LanguageWithTooltip 
                    icon={googletranslateIcon}
                    languages="Japanese, English"
                    tooltipContent="• 日本語: ネイティブ&#10;• 英語: ビジネスレベル (TOEIC 940点)&#10;• UC Santa Cruzで1年間の留学経験あり"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Summary Card */}
          <AnimatedSection direction="right" className="w-full lg:w-3/4">
            <div className="bg-[#227BB7] text-white rounded-lg p-6 shadow-md h-full">
              <h2 className="text-xl font-bold border-l-4 border-[#FDFBCB] pl-2 mb-4">Summary</h2>
              <div>
                <p className="mb-4">初めまして、chikusa namikiです。</p>
                <p className="mb-4">京都大学で数理工学を学びながら、長期インターンではバックエンド開発（DB設計、API実装、アルゴリズム開発等）に加え、
                  フロントエンド開発まで幅広く経験しました。これらの経験を通じて、Web・モバイルアプリケーション開発分野への強い
                  意欲を持つようになりました。将来的にはより複雑で大規模なサービスの開発にも挑戦し、貢献していきたいと考えています。</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Education Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="bg-[#227BB7] text-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold border-l-4 border-[#FDFBCB] pl-2 mb-6">Education</h2>
            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-2 w-0.5 bg-[#FDFBCB]"></div>
              
              {/* Education Item 1 */}
              <div className="mb-8 relative">
                <div className="absolute left-[-41px] top-1 w-5 h-5 bg-[#FDFBCB] rounded-full"></div>
                <div className="mb-1 font-bold">2021.04-2027.03</div>
                  <div className='flex items-center gap-2 mb-2'>
                      <div className="items-center p-0.5 bg-white rounded-md">
                        <Image src={kyotouniIcon} alt="Location" width={32} height={16} />
                      </div>
                    <div className="font-bold text-xl">京都大学工学部情報学科</div>
                  </div>
                <div>数学・物理学を基盤に、統計学、最適化理論、制御理論、コンピュータ科学といった応用数理分野を幅広く学んでいます。</div>
              </div>

              {/* Education Item 2 */}
              <div className="mb-2 relative">
                <div className="absolute left-[-41px] top-1 w-5 h-5 bg-[#FDFBCB] rounded-full"></div>
                <div className="mb-1 font-bold">2024.04-2025.03</div>
                <div className='flex items-center gap-2 mb-2'>
                        <Image src={ucscIcon} alt="Location" width={88} height={16} className='rounded-md'/>
                    <div className="font-bold text-xl">University of California, Santa Cruz</div>
                  </div>
                <div>にてComputer Science専攻として交換留学。</div>
                  <div>基礎的な数学から、人工知能やwebアプリ開発など幅広くCS分野を学習。</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Work Experience Section */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="bg-[#227BB7] text-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold border-l-4 border-[#FDFBCB] pl-2 mb-6">Work Experience</h2>
            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-2 w-0.5 bg-[#FDFBCB]"></div>
              
              {/* Work Experience Item */}
              <div className="relative">
                <div className="absolute left-[-41px] top-1 w-5 h-5 bg-[#FDFBCB] rounded-full"></div>
                <div className="mb-1 font-bold">2024.04-現在</div>
                <div className='flex items-center gap-2 mb-2'>
                        <Image src={starupIcon} alt="Location" width={36} height={16} className='rounded-md'/>
                    <div className="font-bold text-xl">StarUp Inc.</div>
                  </div>
                <div className="mt-2">Python（FastAPI）バックエンド開発、API/DB（MySQL）設計、実装を経験。API駆動開発を重視し、OpenAPI仕様ベースのRESTful API設計・実装を行い、加えて、Docker環境構築を行なったりもしています。また、TypeScriptとNext.jsを用いたフロントエンド開発にも従事しています。
                    テスト実装やドキュメント自動生成による品質・効率向上に加え、プルリクエストでの活発なコードレビューを通じて、チーム開発における品質担保、設計統一、パフォーマンス改善を推進してきました。</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="bg-[#227BB7] text-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold border-l-4 border-[#FDFBCB] pl-2 mb-6">Skills</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4">
              {/* Frontend Skills */}
              <div className="bg-[#FDFBCB] text-black p-4 rounded-lg">
                <h3 className="font-bold mb-2">Frontend</h3>
                <div className="space-y-2">
                  <div className="flex text-[#227BB7] justify-between">
                    <div className="flex items-center gap-2">
                      <Image src={reactIcon} alt="React" width={16} height={16} />
                      <span>React</span>
                    </div>
                    <div className="text-yellow-500">★★★☆☆</div>
                  </div>
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={nextjsIcon} alt="next.js" width={16} height={16} />
                      <span>Next.js</span>
                    </div>
                    <div className="text-yellow-500">★★★☆☆</div>
                  </div>
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={typescriptIcon} alt="TypeScript" width={16} height={16} />
                      <span>TypeScript</span>
                    </div>
                    <div className="text-yellow-500">★★★☆☆</div>
                  </div>
                </div>
              </div>
              
              {/* Backend Skills */}
              <div className="bg-[#FDFBCB] text-black p-4 rounded-lg">
                <h3 className="font-bold mb-2">Backend</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={pythonIcon} alt="Python" width={16} height={16} />
                      <span>Python</span>
                    </div>
                    <div className="text-yellow-500">★★★★☆</div>
                  </div>
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={fastapiIcon} alt="FastAPI" width={16} height={16} />
                      <span>FastAPI</span>
                    </div>
                    <div className="text-yellow-500">★★★★☆</div>
                  </div>
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={golangIcon} alt="Golang" width={16} height={16} />
                      <span>Golang</span>
                    </div>
                    <div className="text-yellow-500">★★☆☆☆</div>
                  </div>
                  
                </div>
              </div>
              
              {/* Tools */}
              <div className="bg-[#FDFBCB] text-black p-4 rounded-lg">
                <h3 className="font-bold mb-2">Tools</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={mysqlIcon} alt="mysql" width={16} height={16} />
                      <span>MySQL</span>
                    </div>
                    <div className="text-yellow-500">★★★★☆</div>
                  </div>
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={dockerIcon} alt="docker" width={16} height={16} />
                      <span>Docker</span>
                    </div>
                    <div className="text-yellow-500">★★★★☆</div>
                  </div>
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={gitIcon} alt="git" width={16} height={16} />
                      <span>Git</span>
                    </div>
                    <div className="text-yellow-500">★★★★☆</div>
                  </div>
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={azureIcon} alt="azure" width={16} height={16} />
                      <span>Azure</span>
                    </div>
                    <div className="text-yellow-500">★★★☆☆</div>
                  </div>
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={googlecolabIcon} alt="google colab" width={16} height={16} />
                      <span>Google Colab</span>
                    </div>
                    <div className="text-yellow-500">★★★★☆</div>
                  </div>
                </div>
              </div>
              
              {/* Others */}
              <div className="bg-[#FDFBCB] text-black p-4 rounded-lg">
                <h3 className="font-bold mb-2">Others</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                <Image src={cIcon} alt="c/c++" width={16} height={16} />
                      <span>C/C++</span>
                    </div>
                    <div className="text-yellow-500">★★☆☆☆</div>
                  </div>
                  <div className="flex justify-between text-[#227BB7]">
                  <div className="flex items-center gap-2">
                      <Image src={reactIcon} alt="React" width={16} height={16} />
                      <span>React Native</span>
                    </div>
                    <div className="text-yellow-500">★★★☆☆</div>
                  </div>
                  <div className="flex justify-between text-[#227BB7]">
                    <div className="flex items-center gap-2">
                      <span>🇺🇸</span>
                      <span>English</span>
                    </div>
                    <div className="text-yellow-500">★★★★☆</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection direction="up" delay={0.5}>
          <div className="bg-[#227BB7] text-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold border-l-4 border-[#FDFBCB] pl-2 mb-6">Projects</h2>
            <div className="flex flex-col space-y-3">
              <ProjectButton 
                image={kanjiIcon}
                description="モバイルアプリケーション向けの漢字認識モデルを開発しました。TensorFlow/Kerasを用いて、漢字のストロークデータを解析し、画像からの認識精度を向上させるためのデータ拡張手法や転移学習を実施しました。量子化やプルーニング、蒸留技術を駆使して、モデルの軽量化と推論速度の向上も図りました。"
                frameworks={["TensorFlow", "Keras", "OpenCV", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "Pickle"]}
                methodologies={["データ拡張", "転移学習（比較検証）", "量子化", "プルーニング", "蒸留", "画像処理 (ストローク描画, バイナリデータ解析)"]}>
                モバイルapp向け漢字認識モデル開発
              </ProjectButton>
              <ProjectButton 
                description="某英語試験の英作文採点を自動化するアプリケーションを開発しました。OpenAI APIを活用して2段階の採点プロセスを実装し、実際の採点結果との精度検証も行いました。プロンプトエンジニアリングを駆使してLLMの採点能力を最大化し、採点基準に忠実かつ教育的価値の高いフィードバックを提供できるように心がけました。"
                technologies={["Python", "OpenAI API"]}
                methodologies={["プロンプトエンジニアリング", "Chain-of-Thought", "Few-shot Learning"]}>
                OpenAI APIを用いた英文添削アプリケーション開発
              </ProjectButton>
              <ProjectButton
                image={nestingIcon}
                description="アクリルキーホルダーの部品を効率的に配置するためのアルゴリズムを開発しました。Bottom-Left Fillアルゴリズムをベースに、多角形パーツの最適配置問題に取り組み、計算コストを抑えるために四角形近似アプローチを採用しました。実装により、手動で配置を行なっていた従来の充填率(30%前後)と比較して充填率60%近くにまで向上させ、配置可能なパーツ数も倍近くまで増加させることに成功。処理時間も40秒以内に抑えて実用性を確保しました。"
                technologies={["Python"]}
                methodologies={["Bottom-Left Fillアルゴリズム", "遺伝的アルゴリズム", "NFP"]}>
                配置最適化アルゴリズム開発
              </ProjectButton>
              <ProjectButton
                image={demandIcon}
                description="大手メーカー商品のECサイト売上データをもとに、需要予測と発注最適化を行うToB向けシステムを開発しました。
                バックエンド統括として、Python/FastAPIを用いたAPI/DB設計と実装を担当し、セール状況を考慮した8週間先までの売上予測ロジックと最適在庫算出アルゴリズムを実装しました。
                4週間のリードタイムを考慮した自動発注提案フローを構築し、発注業務の大幅な効率化と在庫最適化に貢献することができました。
                またフロントエンド開発にも部分的に関わり、Next.js/TypeScriptによる管理画面UIの改善も行いました。"
                technologies={["Python","MySQL","TypeScript"]}
                methodologies={["時系列分析", "需要予測", "在庫最適化", "自動発注アルゴリズム"]}
                frameworks={["FastAPI", "Next.js","React", "Tailwind CSS", "TensorFlow", "scikit-learn", "SQLAlchemy"]}>
                需要予測&在庫管理システム開発
              </ProjectButton>
              <ProjectButton>
                マッチングアプリ風飲食店検索アプリ開発（開発中）
              </ProjectButton>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer Section */}

          <div className="mt-3 flex flex-col items-center justify-center text-[#227BB7]">
                  <div className="flex items-center justify-center gap-2 mb-2 text-[18px]">
                    <Image src={githubIcon} alt="GitHub" width={22} height={22}/>
                    <a href="https://github.com/sss1889/portfolio" target="_blank" rel="noopener noreferrer" className="hover:underline">View Source Code</a>
                  </div>
                  <p>© 2025 Namiki Chikusa. All rights reserved.</p>
          </div>

      </div>

      {/* スクロールトップボタン */}
      <ScrollToTopButton />
    </div>
  );
}
