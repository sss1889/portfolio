import Image from "next/image";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ProjectButton from "../components/ProjectButton";
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

export default function Home() {

  return (
    <div className="min-h-screen bg-[#EFF3F6] p-4 md:p-8">
      
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile and Summary Section */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Profile Card */}
          <div className="w-full md:w-1/4 bg-[#FDFBCB] text-[#227BB7] rounded-lg p-6 shadow-md">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg">Namiki Chikusa</h3>
              <p className="text-sm mb-4">Backend Engineer</p>
              
              <div className="space-y-2 w-full">
                <div className="flex items-center gap-2">
                  <Image src={markerIcon} alt="Location" width={16} height={16} />
                  <span>Kyoto, Japan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={githubIcon} alt="GitHub" width={16} height={16} />
                  <a href="https://github.com/sss1889" target="_blank" rel="noopener noreferrer" className="hover:underline">github</a>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={linkedinIcon} alt="LinkedIn" width={16} height={16} />
                  <a href="https://www.linkedin.com/in/namiki-chikusa" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedIn</a>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={mailIcon} alt='mail' width={16} height={16} />
                  <a href="mailto:natsukirin65@gmail.com" className="hover:underline">natsukirin65@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={googletranslateIcon} alt='google translate' width={16} height={16} />
                  <span>Japanese, English</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Summary Card */}
          <div className="w-full md:w-3/4 bg-[#227BB7] text-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold border-l-4 border-[#FDFBCB] pl-2 mb-4">Summary</h2>
            <div>
              <p className="mb-4">初めまして、chikusa namikiです。</p>
              <p className="mb-4">aaaaaaaaaaaaa</p>
              <p className="mb-4">aaaaaaaaaaaaaa。</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-[#227BB7] text-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold border-l-4 border-[#FDFBCB] pl-2 mb-6">Education</h2>
          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-2 w-0.5 bg-[#FDFBCB]"></div>
            
            {/* Education Item 1 */}
            <div className="mb-8 relative">
              <div className="absolute left-[-41px] top-1 w-5 h-5 bg-[#FDFBCB] rounded-full"></div>
              <div className="mb-1">2025-2027.03</div>
              <div className="font-bold">京都大学工学部情報学科</div>
              <div>色々学んできます</div>
              <div>etc...</div>
            </div>

            {/* Education Item 2 */}
            <div className="mb-8 relative">
              <div className="absolute left-[-41px] top-1 w-5 h-5 bg-[#FDFBCB] rounded-full"></div>
              <div className="mb-1">2024.04-2025.03</div>
              <div className='flex items-center gap-2 mb-2'>
                      <Image src={ucscIcon} alt="Location" width={88} height={16} className='rounded-md'/>
                  <div className="font-bold">University of California, Santa Cruz</div>
                </div>
              <div>にてComputer Science専攻として交換留学</div>
            </div>
            
            {/* Education Item 3 */}
            <div className="relative">
              <div className="absolute left-[-41px] top-1 w-5 h-5 bg-[#FDFBCB] rounded-full"></div>
              <div className="mb-1">2025-2027.03</div>
                <div className='flex items-center gap-2 mb-2'>
                    <div className="items-center p-0.5 bg-white rounded-md">
                      <Image src={kyotouniIcon} alt="Location" width={32} height={16} />
                    </div>
                  <div className="font-bold">京都大学工学部情報学科</div>
                </div>
              <div>色々学んでいます</div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="bg-[#227BB7] text-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold border-l-4 border-[#FDFBCB] pl-2 mb-6">Work Experience</h2>
          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-2 w-0.5 bg-[#FDFBCB]"></div>
            
            {/* Work Experience Item */}
            <div className="relative">
              <div className="absolute left-[-41px] top-1 w-5 h-5 bg-[#FDFBCB] rounded-full"></div>
              <div className="mb-1">2024.04-現在</div>
              <div className='flex items-center gap-2 mb-2'>
                      <Image src={starupIcon} alt="Location" width={36} height={16} className='rounded-md'/>
                  <div className="font-bold">StarUp Inc.</div>
                </div>
              <div className="mt-2">主にpython（FastAPI）を用いたバックエンド開発、システムAPI設計やDB設計なども行っています。</div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-[#227BB7] text-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold border-l-4 border-[#FDFBCB] pl-2 mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        {/* Projects Section */}
        <div className="bg-[#227BB7] text-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold border-l-4 border-[#FDFBCB] pl-2 mb-6">Projects</h2>
          <div className="flex flex-col space-y-3">
            <ProjectButton 
              description="モバイルアプリケーション向けの漢字認識モデルを開発しました。PyTorchを用いて畳み込みニューラルネットワークを実装し、手書き漢字を高精度で認識できるシステムを構築しました。"
              technologies={["Python", "PyTorch", "OpenCV", "React Native"]}>
              モバイルapp向け漢字認識モデル開発
            </ProjectButton>
            <ProjectButton >
              OpenAI APIを用いた英文添削システム開発
            </ProjectButton>
            <ProjectButton>
              配置最適化アルゴリズム開発
            </ProjectButton>
            <ProjectButton>
              商業予測在庫管理システム開発（バックエンド）
            </ProjectButton>
            <ProjectButton>
              商業予測システム開発（フロントエンド）
            </ProjectButton>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-3 text-center text-[#227BB7]">
          <p>© 2025 Namiki Chikusa. All rights reserved.</p>
        </div>
      </div>

      {/* スクロールトップボタン */}
      <ScrollToTopButton />
    </div>
  );
}
