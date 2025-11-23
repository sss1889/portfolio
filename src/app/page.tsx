'use client';

import SectionCard from "../components/cyberpunk/SectionCard";
import SkillsShowcase from "../components/cyberpunk/SkillsShowcase";
import Timeline from "../components/cyberpunk/Timeline";
import ThreeBackground from "../components/ThreeBackground";
import Image from "next/image";
import { ProjectProvider, useProject } from "../context/ProjectContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import React from 'react';

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
import awsIcon from "../image/aws.png";
import dockerIcon from "../image/Docker.png";
import gitIcon from "../image/Git.png";
import googlecolabIcon from "../image/icons8-googlecolab-48.png";
import postgresqlIcon from "../image/postgresql.png";
import redisIcon from "../image/redis.png";
import dddIcon from "../image/ddd.png";
import mailIcon from "../image/icons8-mail-48.png";
import markerIcon from "../image/icons8-marker-48.png";
import ucscIcon from "../image/ucsc.png";
import kyotouniIcon from "../image/Kyoto_University.png";
import starupLogo from "../image/starup.svg";

function HomeContent() {
  const { expandedProject } = useProject();
  const [language, setLanguage] = React.useState<'ja' | 'en'>('ja');
  const profileAnim = useScrollAnimation();
  const summaryAnim = useScrollAnimation();
  const educationAnim = useScrollAnimation();
  const workAnim = useScrollAnimation();
  const skillsAnim = useScrollAnimation();
  const skills = [
    { name: 'React', level: 2, icon: reactIcon, category: 'frontend' as const },
    { name: 'Next.js', level: 2, icon: nextjsIcon, category: 'frontend' as const },
    { name: 'TypeScript', level: 2, icon: typescriptIcon, category: 'frontend' as const },
    { name: 'Python', level: 4, icon: pythonIcon, category: 'backend' as const },
    { name: 'FastAPI', level: 4, icon: fastapiIcon, category: 'backend' as const },
    { name: 'Golang', level: 3, icon: golangIcon, category: 'backend' as const },
    { name: 'MySQL', level: 4, icon: mysqlIcon, category: 'tools' as const },
    { name: 'PostgreSQL', level: 4, icon: postgresqlIcon, category: 'tools' as const },
    { name: 'Redis', level: 3, icon: redisIcon, category: 'tools' as const },
    { name: 'Docker', level: 4, icon: dockerIcon, category: 'tools' as const },
    { name: 'Git', level: 4, icon: gitIcon, category: 'tools' as const },
    { name: 'Azure', level: 2, icon: azureIcon, category: 'tools' as const },
    { name: 'AWS', level: 3, icon: awsIcon, category: 'tools' as const },
    { name: 'Google Colab', level: 4, icon: googlecolabIcon, category: 'tools' as const },
    { name: 'DDD', level: 4, icon: dddIcon, category: 'other' as const },
    { name: 'C/C++', level: 2, icon: cIcon, category: 'other' as const },
    { name: 'React Native', level: 2, icon: reactIcon, category: 'other' as const },
  ];

  const educationTimeline = [
    {
      period: "2021.04-2026.03",
      title: "京都大学工学部情報学科",
      organization: "Kyoto University",
      description: "数学・物理学を基盤に、統計学、最適化理論、制御理論、コンピュータ科学といった応用数理分野を幅広く学んでいます。4年次には物理統計学研究室に所属し、「12次シンプレクティック積分法の構築とBNNへの応用」をテーマに卒業論文を執筆中です。",
      link: "Coming Soon",
      icon: kyotouniIcon,
    },
    {
      period: "2024.04-2025.03",
      title: "University of California, Santa Cruz",
      organization: "Computer Science Exchange Program",
      description: "",
      icon: ucscIcon,
    },
  ];

  const workTimeline = [
    {
      period: "2024.04-現在",
      title: "StarUp Inc.",
      organization: "Backend Engineer",
      description: "バックエンドエンジニアとして、SaaS開発から受託案件まで幅広いプロジェクトに従事。",
      icon: starupLogo,
      projects: [
        {
          name: "需要予測・在庫管理BIツール（ToB）",
          tech: "MySQL, Python (FastAPI), AWS (ECS, S3など), TypeScript",
          details: "バックエンド全体の設計・実装およびインフラ構築を担当。"
        },
        {
          name: "社内HRツール",
          tech: "PostgreSQL, Golang, AWS, GAS",
          details: "社内の人事管理を効率化するツールの開発。"
        },
        {
          name: "SaaS開発（ARCHAIVE）",
          tech: "Backend Development",
          details: "図面データ管理SaaSのバックエンド開発を担当。",
          link: "https://archaive.net/"
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen cyberpunk-bg text-white font-mono relative overflow-hidden">
      {/* Three.js 3D Background */}
      <ThreeBackground />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 relative z-10 max-w-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="flex items-center justify-center gap-4">
            <Image src={starupLogo} alt="StarUp Logo" width={60} height={60} className="animate-float" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-pixel text-neon-blue animate-pulse-neon leading-tight">
              Namiki Chikusa
            </h1>
          </div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-pixel text-neon-purple mb-6 mt-4">
            Backend Engineer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-teal to-transparent mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 md:space-y-10">
            {/* Profile Card */}
            <div
              ref={profileAnim.ref}
              className={`transition-all duration-300 ${expandedProject ? 'blur-sm opacity-50' : ''} ${profileAnim.isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
            >
            <SectionCard title="Profile" glowColor="blue">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white">
                  <Image src={markerIcon} alt="Location" width={16} height={16} />
                  <span>Kyoto, Japan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={githubIcon} alt="GitHub" width={16} height={16} />
                  <a
                    href="https://github.com/sss1889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-teal hover:underline decoration-dashed transition-colors"
                  >
                    github.com/sss1889
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={linkedinIcon} alt="LinkedIn" width={16} height={16} />
                  <a
                    href="https://www.linkedin.com/in/namiki-chikusa-37b738301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-teal hover:underline decoration-dashed transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={mailIcon} alt="mail" width={16} height={16} />
                  <a
                    href="mailto:natsukirin65@gmail.com"
                    className="hover:text-neon-teal hover:underline decoration-dashed transition-colors"
                  >
                    natsukirin65@gmail.com
                  </a>
                </div>
              </div>
            </SectionCard>
            </div>

            {/* Summary Card */}
            <div
              ref={summaryAnim.ref}
              className={`transition-all duration-300 ${expandedProject ? 'blur-sm opacity-50' : ''} ${summaryAnim.isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
            >
            <SectionCard title="Summary" glowColor="purple">
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
                  className="px-3 py-1 text-xs font-mono border border-neon-purple text-neon-purple hover:bg-neon-purple/20 rounded transition-colors"
                >
                  {language === 'ja' ? 'EN' : 'JA'}
                </button>
              </div>
              {language === 'ja' ? (
                <div>
                  <p className="mb-4">
                    主にバックエンド領域を担当しているエンジニアです。
                  </p>
                  <p className="mb-4">
                    SaaS開発から受託案件まで、様々なプロジェクトで設計・実装を行っています。
                  </p>
                  <p className="mb-4">
                    最近では、保守性・拡張性の高いシステム構築を目指し、DDD（ドメイン駆動設計）の思想に基づくオニオンアーキテクチャを積極的に取り入れています。
                  </p>
                </div>
              ) : (
                <div>
                  <p className="mb-4">
                    I am primarily a backend engineer.
                  </p>
                  <p className="mb-4">
                    I handle design and implementation for a wide range of projects, from SaaS development to contract work.
                  </p>
                  <p className="mb-4">
                    Recently, I have been actively adopting Onion Architecture based on Domain-Driven Design (DDD) principles to build highly maintainable and scalable systems.
                  </p>
                </div>
              )}
            </SectionCard>
            </div>

            {/* Education & Work Experience - 2 Column Grid on larger screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Education Section */}
              <div
                ref={educationAnim.ref}
                className={`transition-all duration-300 ${expandedProject ? 'blur-sm opacity-50' : ''} ${educationAnim.isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
              >
                <SectionCard title="Education" glowColor="teal">
                  <Timeline items={educationTimeline} />
                </SectionCard>
              </div>

              {/* Work Experience Section */}
              <div
                ref={workAnim.ref}
                className={`transition-all duration-300 ${expandedProject ? 'blur-sm opacity-50' : ''} ${workAnim.isVisible ? 'animate-slideInRight' : 'opacity-0'}`}
              >
                <SectionCard title="Work Experience" glowColor="pink">
                  <Timeline items={workTimeline} />
                </SectionCard>
              </div>
            </div>


          {/* Skills Showcase */}
          <div
            ref={skillsAnim.ref}
            className={`transition-all duration-300 ${expandedProject ? 'blur-sm opacity-50' : ''} ${skillsAnim.isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
          >
          <SkillsShowcase skills={skills} />
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-12 md:mt-16 flex flex-col items-center justify-center border-t border-neon-blue/30 pt-8 md:pt-10 transition-all duration-300 ${expandedProject ? 'blur-sm opacity-50' : ''}`}>
          <div className="flex items-center justify-center gap-2 mb-2 text-base">
            <Image src={githubIcon} alt="GitHub" width={22} height={22} />
            <a
              href="https://github.com/sss1889/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-teal hover:underline decoration-dashed transition-colors"
            >
              View Source Code
            </a>
          </div>
          <p className="text-sm text-text-dim">© 2025 Namiki Chikusa. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ProjectProvider>
      <HomeContent />
    </ProjectProvider>
  );
}
