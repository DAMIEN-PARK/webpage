'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Search, 
  Database, 
  Brain, 
  BarChart3, 
  Lightbulb, 
  Code, 
  Mail, 
  Github,
  ExternalLink,
  Mic,
  Scale,
  Users,
  TrendingUp,
  FileText,
  Zap
} from 'lucide-react'
import FractalCard from '@/components/FractalCard'
import CodeBlock from '@/components/CodeBlock'
import DetailModal from '@/components/DetailModal'

export default function Home() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null)

  const dataAnalysisStages = [
    {
      title: "데이터 수집",
      subtitle: "호기심의 시작점",
      description: "어린 시절 PC통신으로 시작한 호기심은 법대라는 경로를 거쳐 지금까지 이어졌습니다. 에버노트에서 노션, 그리고 옵시디언까지 - 다양한 경험과 지식을 체계적으로 수집하는 과정이었습니다.",
      icon: <Search size={24} />,
      details: [
        {
          title: "PC통신 시대",
          content: "1990년대 후반, PC통신을 통해 처음으로 디지털 세계에 발을 들였습니다. 하이텔, 천리안, 나우누리 등에서 다양한 정보를 수집하고 커뮤니티 활동을 하며 디지털 문화를 경험했습니다.",
          type: 'text' as const
        },
        {
          title: "에버노트로의 진화",
          content: "2010년대 초반, 에버노트를 통해 체계적인 정보 수집을 시작했습니다. 웹 클리핑, 노트 작성, 태그 시스템을 활용해 개인 지식 관리의 기초를 다졌습니다.",
          type: 'text' as const
        },
        {
          title: "노션으로의 도약",
          content: "2018년부터 노션을 사용하며 더욱 체계적인 정보 관리를 시작했습니다. 데이터베이스 기능, 템플릿 시스템, 협업 기능을 활용해 개인과 팀의 지식을 체계화했습니다.",
          type: 'text' as const
        },
        {
          title: "옵시디언과 지식 그래프",
          content: "2022년부터 옵시디언을 도입하여 지식 그래프 기반의 연결된 학습을 시작했습니다. 마크다운 기반의 노트 작성과 플러그인을 활용해 더욱 깊이 있는 지식 구조화를 실현하고 있습니다.",
          type: 'text' as const
        }
      ],
      media: undefined,
      // 미디어 추가 예시:
      // media: {
      //   type: 'image',
      //   src: '/images/data-collection.jpg',
      //   alt: '데이터 수집 과정',
      //   caption: 'PC통신부터 옵시디언까지의 진화'
      // }
    },
    {
      title: "데이터 전처리",
      subtitle: "정리와 구조화",
      description: "수집된 정보들을 의미 있는 데이터로 가공하는 과정을 배웠습니다. 자격증과 기술 학습을 통해 데이터의 양과 질에 대한 감각을 키워왔고, 단순한 정보 수집을 넘어서 체계적인 정리 방법을 익혔습니다.",
      icon: <Database size={24} />,
      details: [
        {
          title: "법대 경험과 논리적 사고",
          content: "법과대학에서 배운 논리적 사고와 체계적인 접근 방법이 데이터 전처리에 큰 도움이 되었습니다. 복잡한 법률 문제를 단계별로 분석하고 정리하는 과정이 데이터 구조화 능력의 기초가 되었습니다.",
          type: 'text' as const
        },
        {
          title: "자격증 학습 과정",
          content: "다양한 자격증을 준비하며 체계적인 학습 방법을 익혔습니다. 정보를 분류하고, 우선순위를 정하고, 효율적으로 정리하는 과정에서 데이터 전처리의 핵심 원리를 배웠습니다.",
          type: 'text' as const
        },
        {
          title: "기술 스택 정리",
          content: "학습한 기술들을 카테고리별로 분류하고, 난이도와 활용도에 따라 체계적으로 정리했습니다. 이를 통해 기술 트렌드와 개인 성장 방향을 명확히 파악할 수 있게 되었습니다.",
          type: 'text' as const
        }
      ],
      media: undefined,
      // 미디어 추가 예시:
      // media: {
      //   type: 'video',
      //   src: '/videos/data-preprocessing.mp4',
      //   caption: '데이터 전처리 과정 시연'
      // }
    },
    {
      title: "데이터 분석",
      subtitle: "패턴과 인사이트 발견",
      description: "언어 습득, 시각화, 음성인식 프로젝트를 통해 데이터를 다루는 다양한 분석 방법을 익혔습니다. 현재는 어르신을 위한 법률 서비스 개발에 집중하며, 복잡한 법률 정보를 사용자 친화적으로 분석하는 작업을 하고 있습니다.",
      icon: <Brain size={24} />,
      details: [
        {
          title: "언어 처리와 자연어 분석",
          content: "한국어, 영어, 일본어 등 다양한 언어를 학습하며 자연어 처리에 대한 이해를 깊게 했습니다. 특히 한국어의 특성을 고려한 텍스트 분석과 감정 분석 프로젝트를 진행했습니다.",
          type: 'text' as const
        },
        {
          title: "음성 인식 프로젝트",
          content: "어르신을 위한 법률 음성 서비스 개발을 위해 음성 인식 기술을 연구하고 있습니다. 노이즈 제거, 발음 인식, 문맥 이해 등 다양한 기술적 도전과제를 해결하고 있습니다.",
          type: 'text' as const
        },
        {
          title: "법률 데이터 분석",
          content: "법제처 OpenAPI를 활용하여 법률 데이터를 분석하고 있습니다. 복잡한 법령 정보를 사용자가 이해하기 쉽도록 구조화하고, 관련 법령 간의 연결성을 파악하는 작업을 진행하고 있습니다.",
          type: 'text' as const
        }
      ],
      media: undefined,
      // 미디어 추가 예시:
      // media: {
      //   type: 'image',
      //   src: '/images/data-analysis.jpg',
      //   alt: '데이터 분석 과정',
      //   caption: '음성인식 및 법률 AI 분석'
      // }
    },
    {
      title: "데이터 시각화",
      subtitle: "이해하기 쉬운 표현",
      description: "데이터를 통해 미래를 예측하고 해석하는 능력을 키워왔습니다. 특히 사회적 약자를 위한 기술 개발에 관심을 가지고, 복잡한 정보를 직관적으로 이해할 수 있도록 시각화하는 방법을 연구하고 있습니다.",
      icon: <BarChart3 size={24} />,
      details: [
        {
          title: "대시보드 설계",
          content: "복잡한 데이터를 직관적으로 이해할 수 있는 대시보드를 설계하고 있습니다. 사용자 경험을 고려한 인터페이스 설계와 데이터 스토리텔링 기법을 활용하고 있습니다.",
          type: 'text' as const
        },
        {
          title: "인터랙티브 차트",
          content: "정적인 차트를 넘어서 사용자가 직접 조작할 수 있는 인터랙티브 차트를 개발하고 있습니다. 필터링, 줌, 드릴다운 등의 기능을 통해 더욱 깊이 있는 데이터 탐색이 가능하도록 했습니다.",
          type: 'text' as const
        },
        {
          title: "접근성 고려",
          content: "어르신과 같은 디지털 소외 계층도 쉽게 사용할 수 있도록 접근성을 고려한 시각화를 연구하고 있습니다. 큰 폰트, 명확한 색상 대비, 직관적인 아이콘 등을 활용하고 있습니다.",
          type: 'text' as const
        }
      ],
      media: undefined,
      // 미디어 추가 예시:
      // media: {
      //   type: 'video',
      //   src: '/videos/data-visualization.mp4',
      //   caption: '시각화 프로젝트 데모'
      // }
    },
    {
      title: "인사이트 도출",
      subtitle: "가치 창출과 미래 설계",
      description: "분석을 통해 얻은 인사이트를 바탕으로 SaaS 개발자, 데이터 분석가로서 더 많은 사람들에게 가치를 전달하고 싶습니다. 프랙탈처럼 확장되는 내 경험의 조각들을 하나의 서비스로 연결하여 사회적 가치를 창출하고 싶습니다.",
      icon: <Lightbulb size={24} />,
      details: [
        {
          title: "사회적 가치 창출",
          content: "기술을 통해 사회적 약자에게 도움을 주고자 하는 마음이 모든 프로젝트의 원동력입니다. 어르신을 위한 법률 서비스, 장애인을 위한 접근성 개선, 소외 계층을 위한 교육 플랫폼 등 다양한 사회적 가치 창출 프로젝트를 계획하고 있습니다.",
          type: 'text' as const
        },
        {
          title: "SaaS 서비스 개발",
          content: "개인과 소규모 팀이 쉽게 사용할 수 있는 SaaS 서비스를 개발하고 싶습니다. 데이터 분석, 프로젝트 관리, 협업 도구 등 실용적이면서도 사용하기 쉬운 서비스를 만들어 더 많은 사람들에게 가치를 전달하고 싶습니다.",
          type: 'text' as const
        },
        {
          title: "지속 가능한 성장",
          content: "프랙탈처럼 확장되는 기술과 경험을 바탕으로 지속 가능한 성장을 추구합니다. 새로운 기술을 배우고, 기존 지식을 연결하고, 더 나은 솔루션을 만들어가는 과정을 통해 개인과 사회의 발전에 기여하고 싶습니다.",
          type: 'text' as const
        }
      ],
      media: undefined,
      // 미디어 추가 예시:
      // media: {
      //   type: 'image',
      //   src: '/images/insights.jpg',
      //   alt: '인사이트 도출',
      //   caption: '사회적 가치 창출 프로젝트'
      // }
    }
  ]

  const apiCode = `# Python3 샘플 코드 - 법제처 OpenAPI

import requests

url = 'http://apis.data.go.kr/1170000/law/lawSearchList.do'
params = {
    'serviceKey': '서비스키',
    'target': 'law',
    'query': '10',
    'numOfRows': '10',
    'pageNo': '1'
}

response = requests.get(url, params=params)
print(response.content)`

  const n8nFlow = `# n8n 자동화 흐름 구조

1. 음성 입력 → 음성 인식 (STT)
2. 법률 키워드 추출 → 법제처 API 검색
3. 관련 법령 정보 수집 → 데이터베이스 저장
4. 사용자 친화적 설명 생성 → 음성 합성 (TTS)
5. 결과 전달 → 사용자 피드백 수집`

  const dataProcess = `# 데이터 분석 프로세스

## 1. 데이터 수집 (Data Collection)
- PC통신, 에버노트, 노션, 옵시디언
- 법대 경험, 자격증, 기술 학습

## 2. 데이터 전처리 (Data Preprocessing)
- 정보 체계화 및 구조화
- 노이즈 제거 및 정규화

## 3. 데이터 분석 (Data Analysis)
- 패턴 발견 및 상관관계 분석
- 음성인식, 시각화, 법률 AI

## 4. 데이터 시각화 (Data Visualization)
- 복잡한 정보의 직관적 표현
- 사용자 친화적 인터페이스

## 5. 인사이트 도출 (Insight Generation)
- 사회적 가치 창출
- SaaS 서비스 개발`

  const handleCardClick = (index: number) => {
    setSelectedStage(index)
  }

  const handleCloseModal = () => {
    setSelectedStage(null)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-fractal-50 to-data-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">데이터 분석으로</span>
              <br />
              <span className="text-slate-900 dark:text-slate-100">나를 소개합니다</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              데이터 분석의 5단계 과정을 통해
              <br />
              제가 어떤 사람인지, 무엇을 추구하는지
              <br />
              체계적으로 보여드리겠습니다.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-full">
                <Search size={20} className="text-fractal-600" />
                <span className="text-sm font-medium">수집</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-full">
                <Database size={20} className="text-data-600" />
                <span className="text-sm font-medium">전처리</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-full">
                <Brain size={20} className="text-fractal-600" />
                <span className="text-sm font-medium">분석</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-full">
                <BarChart3 size={20} className="text-data-600" />
                <span className="text-sm font-medium">시각화</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-full">
                <Lightbulb size={20} className="text-fractal-600" />
                <span className="text-sm font-medium">인사이트</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Analysis Journey */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">데이터 분석 프로세스</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              데이터 분석의 5단계 과정을 통해 제가 어떤 사람인지 알아보세요
              <br />
              <span className="text-sm text-fractal-600">각 항목을 클릭하면 더 자세한 내용을 확인할 수 있습니다</span>
            </p>
          </motion.div>

          <div className="space-y-8">
            {dataAnalysisStages.map((stage, index) => (
              <FractalCard
                key={index}
                title={stage.title}
                subtitle={stage.subtitle}
                description={stage.description}
                icon={stage.icon}
                delay={index * 0.2}
                media={stage.media}
                onClick={() => handleCardClick(index)}
                hasDetails={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedStage !== null && (
        <DetailModal
          isOpen={selectedStage !== null}
          onClose={handleCloseModal}
          title={dataAnalysisStages[selectedStage].title}
          subtitle={dataAnalysisStages[selectedStage].subtitle}
          description={dataAnalysisStages[selectedStage].description}
          icon={dataAnalysisStages[selectedStage].icon}
          details={dataAnalysisStages[selectedStage].details}
        />
      )}

      {/* Data Process Overview */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">데이터 분석 프로세스 개요</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              각 단계별로 제가 어떤 경험과 기술을 가지고 있는지 정리했습니다
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <CodeBlock 
              code={dataProcess} 
              language="markdown"
              title="데이터 분석 프로세스"
            />
          </motion.div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">기술적 구현</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              실제 프로젝트에서 사용하는 기술 스택과 구현 방법
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                법제처 OpenAPI 연동
              </h3>
              <CodeBlock 
                code={apiCode} 
                language="python"
                title="법제처 API 샘플"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                n8n 자동화 흐름
              </h3>
              <CodeBlock 
                code={n8nFlow} 
                language="yaml"
                title="n8n 워크플로우"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="section-padding bg-gradient-to-br from-fractal-50 to-data-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">핵심 인사이트</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              데이터 분석을 통해 발견한 제가 가진 핵심 가치
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="fractal-card p-6 text-center"
            >
              <FileText size={32} className="mx-auto mb-4 text-fractal-600" />
              <h3 className="text-lg font-semibold mb-2">체계적 사고</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                복잡한 정보를 체계적으로 정리하고 구조화하는 능력
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="fractal-card p-6 text-center"
            >
              <Zap size={32} className="mx-auto mb-4 text-data-600" />
              <h3 className="text-lg font-semibold mb-2">문제 해결</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                데이터를 통해 문제의 본질을 파악하고 해결책을 도출
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="fractal-card p-6 text-center"
            >
              <Users size={32} className="mx-auto mb-4 text-fractal-600" />
              <h3 className="text-lg font-semibold mb-2">사회적 가치</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                기술을 통해 사회적 약자에게 도움을 주고자 하는 마음
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Portfolio */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">연락처 & 포트폴리오</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              데이터 분석을 통해 함께 성장할 수 있는 기회를 기다립니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="fractal-card p-8"
            >
              <Mail size={32} className="mx-auto mb-4 text-fractal-600" />
              <h3 className="text-xl font-semibold mb-4">연락하기</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                프로젝트 협업이나 기술 문의가 있으시면 언제든 연락주세요.
              </p>
              <a 
                href="mailto:park.insik@gmail.com" 
                className="inline-flex items-center space-x-2 bg-fractal-600 hover:bg-fractal-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Mail size={20} />
                <span>이메일 보내기</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="fractal-card p-8"
            >
              <Github size={32} className="mx-auto mb-4 text-data-600" />
              <h3 className="text-xl font-semibold mb-4">포트폴리오</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                GitHub, Notion, 개발 중인 서비스들을 확인해보세요.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://github.com/DAMIEN-PARK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                  <ExternalLink size={16} />
                </a>
                <a 
                  href="https://notion.so" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <span>Notion 포트폴리오</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-4">
            <span className="gradient-text font-semibold">데이터 분석으로 나를 소개합니다</span>
          </p>
          <p className="text-sm">
            © 2024 데이터 개발자. 데이터의 힘으로 더 나은 세상을 만들어갑니다.
          </p>
        </div>
      </footer>
    </div>
  )
} 