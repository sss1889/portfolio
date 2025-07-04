# Portfolio Metadata - Namiki Chikusa

## Personal Information
- **Name**: Namiki Chikusa
- **Role**: Backend Engineer
- **Location**: Kyoto, Japan
- **Email**: natsukirin65@gmail.com
- **GitHub**: https://github.com/sss1889
- **LinkedIn**: https://www.linkedin.com/in/namiki-chikusa-37b738301

## Languages
- 日本語: ネイティブ
- 英語: ビジネスレベル (TOEIC 940点)
- UC Santa Cruzで1年間の留学経験あり

## Summary
初めまして、chikusa namikiです。
京都大学で数理工学を学びながら、長期インターンではバックエンド開発（DB設計、API実装、アルゴリズム開発等）に加え、フロントエンド開発まで幅広く経験しました。これらの経験を通じて、Web・モバイルアプリケーション開発分野への強い意欲を持つようになりました。将来的にはより複雑で大規模なサービスの開発にも挑戦し、貢献していきたいと考えています。

## Education

### 京都大学工学部情報学科 (2021.04-2027.03)
数学・物理学を基盤に、統計学、最適化理論、制御理論、コンピュータ科学といった応用数理分野を幅広く学んでいます。

### University of California, Santa Cruz (2024.04-2025.03)
Computer Science専攻として交換留学。基礎的な数学から、人工知能やwebアプリ開発など幅広くCS分野を学習。

## Work Experience

### StarUp Inc. (2024.04-現在)
Python（FastAPI）バックエンド開発、API/DB（MySQL）設計、実装を経験。API駆動開発を重視し、OpenAPI仕様ベースのRESTful API設計・実装を行い、加えて、Docker環境構築を行なったりもしています。また、TypeScriptとNext.jsを用いたフロントエンド開発にも従事しています。
テスト実装やドキュメント自動生成による品質・効率向上に加え、プルリクエストでの活発なコードレビューを通じて、チーム開発における品質担保、設計統一、パフォーマンス改善を推進してきました。

## Skills

### Frontend
- React: ★★★☆☆
- Next.js: ★★★☆☆
- TypeScript: ★★★☆☆

### Backend
- Python: ★★★★☆
- FastAPI: ★★★★☆
- Golang: ★★☆☆☆

### Tools
- MySQL: ★★★★☆
- Docker: ★★★★☆
- Git: ★★★★☆
- Azure: ★★★☆☆
- Google Colab: ★★★★☆

### Others
- C/C++: ★★☆☆☆
- React Native: ★★★☆☆
- English: ★★★★☆

## Projects

### モバイルapp向け漢字認識モデル開発
モバイルアプリケーション向けの漢字認識モデルを開発しました。TensorFlow/Kerasを用いて、漢字のストロークデータを解析し、画像からの認識精度を向上させるためのデータ拡張手法や転移学習を実施しました。量子化やプルーニング、蒸留技術を駆使して、モデルの軽量化と推論速度の向上も図りました。

**Frameworks**: TensorFlow, Keras, OpenCV, scikit-learn, NumPy, Pandas, Matplotlib, Pickle
**Methodologies**: データ拡張, 転移学習（比較検証）, 量子化, プルーニング, 蒸留, 画像処理 (ストローク描画, バイナリデータ解析)

### OpenAI APIを用いた英文添削アプリケーション開発
某英語試験の英作文採点を自動化するアプリケーションを開発しました。OpenAI APIを活用して2段階の採点プロセスを実装し、実際の採点結果との精度検証も行いました。プロンプトエンジニアリングを駆使してLLMの採点能力を最大化し、採点基準に忠実かつ教育的価値の高いフィードバックを提供できるように心がけました。

**Technologies**: Python, OpenAI API
**Methodologies**: プロンプトエンジニアリング, Chain-of-Thought, Few-shot Learning

### 配置最適化アルゴリズム開発
アクリルキーホルダーの部品を効率的に配置するためのアルゴリズムを開発しました。Bottom-Left Fillアルゴリズムをベースに、多角形パーツの最適配置問題に取り組み、計算コストを抑えるために四角形近似アプローチを採用しました。実装により、手動で配置を行なっていた従来の充填率(30%前後)と比較して充填率60%近くにまで向上させ、配置可能なパーツ数も倍近くまで増加させることに成功。処理時間も40秒以内に抑えて実用性を確保しました。

**Technologies**: Python
**Methodologies**: Bottom-Left Fillアルゴリズム, 遺伝的アルゴリズム, NFP

### 需要予測&在庫管理システム開発
大手メーカー商品のECサイト売上データをもとに、需要予測と発注最適化を行うToB向けシステムを開発しました。
バックエンド統括として、Python/FastAPIを用いたAPI/DB設計と実装を担当し、セール状況を考慮した8週間先までの売上予測ロジックと最適在庫算出アルゴリズムを実装しました。
4週間のリードタイムを考慮した自動発注提案フローを構築し、発注業務の大幅な効率化と在庫最適化に貢献することができました。
またフロントエンド開発にも部分的に関わり、Next.js/TypeScriptによる管理画面UIの改善も行いました。

**Technologies**: Python, MySQL, TypeScript
**Methodologies**: 時系列分析, 需要予測, 在庫最適化, 自動発注アルゴリズム
**Frameworks**: FastAPI, Next.js, React, Tailwind CSS, TensorFlow, scikit-learn, SQLAlchemy

### マッチングアプリ風飲食店検索アプリ開発（開発中）
現在開発中のプロジェクト