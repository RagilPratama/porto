export const en = {
  hero: {
    roles: ['Fullstack Developer', 'Frontend Developer', 'Backend Developer']
  },
  education: {
    items: [
      {
        degree: 'Bachelor Degree in Informatics Engineering',
        school: 'Universitas Indraprasta PGRI (UNINDRA)',
        period: 'Graduated: 2025',
        highlight: 'Jakarta, Indonesia',
        description:
          'Focused on software engineering practices, web architecture, and applied fullstack development.'
      },
      {
        degree: 'Software Engineering Vocational Program',
        school: 'Vocational High School Wikrama',
        period: 'Graduated: 2018',
        highlight: 'Bogor, Indonesia',
        description:
          'Built strong foundations in programming, quality assurance, and project collaboration.'
      }
    ]
  },
  terminal: {
    developer: {
      focus: ['Scalable Web Applications', 'High-Performance REST APIs']
    }
  },
  experience: {
    items: [
      {
        role: 'Frontend Developer',
        impact:
          'Building Ocean by BCA, an integrated business ecosystem platform connecting 34+ million customers with banking, operational, and industry networks.',
        points: [
          'Developed and maintained Ocean by BCA (ocean.bca.co.id), a comprehensive business ecosystem platform with integrated dashboard, product recommendations, and myEcosystem features.',
          'Implemented micro frontend architecture using Next.js to enable scalable, modular development across multiple business domains.',
          'Built real-time integrated dashboards displaying cash flow, transaction trends, and business analytics for data-driven decision making.',
          'Collaborated with cross-functional teams to deliver features supporting 99% digital transactions with 76% volume growth.'
        ]
      },
      {
        role: 'Frontend Developer',
        impact:
          'Shipped reusable frontend architecture and performance-focused UI for insurance products serving millions of policyholders.',
        points: [
          'Built and maintained customer-facing modules with Vue.js 2/3 and Pinia state patterns, delivering policy management, claims submission, and premium payment features for web and mobile web platforms.',
          'Converted design specs into responsive, accessible interfaces with consistent component standards, establishing a shared design system used across multiple product teams to reduce UI drift.',
          'Integrated REST APIs and improved delivery quality through cross-team collaboration with backend engineers and QA, reducing integration-related defects by enforcing contract-first development practices.'
        ]
      },
      {
        role: 'Backend Developer',
        impact:
          'Engineered high-performance backend services for internal banking infrastructure handling secure transaction processing.',
        points: [
          'Developed and maintained OASE, an internal banking application focused on secure data processing, supporting daily operations for thousands of internal users across BCA branches.',
          'Designed scalable RESTful APIs to facilitate seamless communication between banking modules — including transaction monitoring, reporting pipelines, and user management — with proper authentication and role-based access control.',
          'Optimized backend workflows, query execution plans, and database indexing strategies to ensure high availability and sub-second response times under heavy concurrent load.'
        ]
      },
      {
        role: 'Fullstack Developer',
        impact:
          'Delivered national-scale public service platforms serving family planning and population programs across Indonesia.',
        points: [
          'Developed core services, admin dashboards, and role-based access control for the BKKBN Portal using Laravel, enabling regional teams to manage program data independently.',
          'Built RESTful API integrations connecting several internal BKKBN ecosystems — including family planning reporting, population data, and regional budget tracking — into a unified platform.',
          'Delivered and presented production-ready solutions to nationwide stakeholders, ensuring compliance with government data standards and accessibility requirements.',
          'Maintained and optimized MySQL databases handling large-scale population and program datasets, improving query performance for reporting modules.'
        ]
      },
      {
        role: 'Fullstack Developer',
        impact:
          'Spearheaded the development of internal management systems and public-facing portals for mineral and coal governance.',
        points: [
          'Built and deployed SIDARA and SUPEL applications for internal mineral and coal management using CodeIgniter and Laravel, enabling ministry staff to track licensing, production, and compliance data in real time.',
          'Developed and maintained the Minerba homepage as a public-facing portal, improving accessibility to ministry regulations, mineral data dashboards, and public announcements for citizens and industry stakeholders.',
          'Implemented robust backend logic and architectural patterns with Yii and Laravel frameworks, including multi-tier authentication, audit logging, and data validation for government compliance requirements.',
          'Designed normalized MySQL database schemas for mineral resource datasets, supporting complex reporting queries across regional mining operations nationwide.'
        ]
      },
      {
        role: 'Fullstack Developer',
        impact:
          'Accelerated insurance onboarding workflows through payment gateway and multi-partner API integration.',
        points: [
          'Integrated Midtrans payment gateway into web and mobile insurance enrollment flows, handling policy purchases, premium calculations, and real-time payment confirmation.',
          'Connected external insurance provider APIs (Zurich, KB, Sinarmas, and others) to automate quote retrieval, policy issuance, and claims data exchange across multiple insurers.',
          'Developed RESTful APIs with Lumen (Laravel micro-framework) for backend orchestration and built interactive frontend modules with ReactJS for the customer-facing insurance portal.',
          'Designed and optimized MySQL schemas for policy, customer, and transaction data, ensuring data integrity across multi-provider insurance workflows.'
        ]
      },
      {
        role: 'Quality Assurance',
        impact:
          'Improved release confidence and product stability through structured testing discipline and systematic defect reporting.',
        points: [
          'Executed black-box and regression test suites across web and mobile platforms before each release milestone, reducing post-release defect rates by catching issues early in the cycle.',
          'Prepared comprehensive test plans, test cases, and QA checklists for UAT and integration testing cycles, covering functional, edge-case, and cross-browser scenarios.',
          'Tracked, documented, and communicated defects with developers through structured reporting workflows — from reproduction steps to verification and closure — ensuring accountability and traceability.',
          'Contributed to process improvements by advocating for shift-left testing practices and maintaining a centralized knowledge base of recurring issues and their root causes.'
        ]
      }
    ]
  },
  portfolio: {
    items: [
      {
        title: 'Ocean by BCA',
        description:
          'An integrated business ecosystem platform connecting 34+ million customers with banking, operational, and industry networks. Features include integrated dashboard for cash flow monitoring, product recommendations, and myEcosystem for business collaboration.',
        info: 'BCA — Business Platform'
      },
      {
        title: 'AIA Insurance Web App',
        description:
          'A comprehensive and responsive insurance portal developed using Vue.js 3, Pinia, and Vue Router, designed to streamline policy management and enhance user experience for AIA customers.',
        info: 'AIA Indonesia — Internal'
      },
      {
        title: 'OASE — BCA',
        description:
          'A high-availability internal banking API system for Bank Central Asia (BCA), built with Node.js and Express. It serves as a critical middleware layer for processing secure transactions and managing sensitive financial data with enterprise-grade security.',
        info: 'BCA — Internal'
      },
      {
        title: 'SIDARA & SUPEL',
        description:
          'Internal management systems for the Ministry of Energy and Mineral Resources (ESDM), designed to streamline data reporting and administrative workflows using CodeIgniter and Laravel.',
        info: 'Kementerian ESDM — Internal'
      },
      {
        title: 'Minerba Homepage',
        description:
          'The official public portal for the Directorate General of Mineral and Coal, providing real-time information and regulations built with PHP frameworks including Yii and Laravel.',
        info: 'Kementerian ESDM — Public Portal'
      },
      {
        title: 'BKKBN Portal & Siga App',
        description:
          'A large-scale national family information system (SIGA) that facilitates data collection and demographic analysis across Indonesia, featuring a robust API ecosystem built with Laravel and ReactJS.',
        info: 'BKKBN Indonesia — Government Project'
      },
      {
        title: 'WowPremi',
        description:
          'An all-in-one digital insurance platform integrated with Midtrans for seamless payment processing. Available on Web, Android, and iOS to provide users with instant insurance quotes and easy policy issuance.',
        info: ''
      },
      {
        title: 'BKKBN API Ecosystem',
        description:
          'Enterprise-grade RESTful API infrastructure that serves as a centralized data hub, securely connecting and synchronizing multiple internal government applications to ensure data integrity.',
        info: 'BKKBN Indonesia — Government Project'
      },
      {
        title: 'AIA+',
        description:
          'A cutting-edge real-time digital insurance ecosystem that connects policyholders directly with service providers, offering instant access to health benefits, claims status, and personalized wellness tracking.',
        info: 'AIA Indonesia — Customer Facing'
      },
      {
        title: 'OGYA HRIS System',
        description:
          'A comprehensive Human Resource Information System (HRIS) designed to automate human capital management, featuring employee data administration, attendance tracking, and streamlined HR workflows.',
        info: ''
      },
      {
        title: 'OGYA Company Profile',
        description:
          "A high-performance corporate website designed to showcase OGYA's business services and corporate culture, featuring an integrated career portal for talent acquisition.",
        info: ''
      },
      {
        title: 'SmartCloud Indonesia',
        description:
          'Advanced Quality Assurance and automated testing framework implemented for cloud-based enterprise solutions, ensuring high availability, security, and performance for mission-critical business systems.',
        info: ''
      },
      {
        title: 'Carfix',
        description:
          'Advanced Quality Assurance and performance monitoring for a sophisticated automotive e-commerce ecosystem, ensuring seamless service integration and reliable booking for automotive services.',
        info: ''
      },
      {
        title: 'Sheldon Dental Management',
        description:
          'An end-to-end clinical management solution for dental professionals, integrating patient scheduling, digital medical records, and inventory tracking to improve operational efficiency.',
        info: ''
      },
      {
        title: 'Pins Indonesia',
        description:
          "A sleek and interactive frontend interface for Telkom Group's internal services, focusing on user-centric design and high-performance data visualization.",
        info: 'Pins Indonesia — Telkom Group'
      }
    ]
  }
}

export const id = {
  hero: {
    roles: ['Fullstack Developer', 'Frontend Developer', 'Backend Developer']
  },
  education: {
    items: [
      {
        degree: 'Sarjana Teknik Informatika',
        school: 'Universitas Indraprasta PGRI (UNINDRA)',
        period: 'Lulus: 2025',
        highlight: 'Jakarta, Indonesia',
        description:
          'Berfokus pada praktik rekayasa perangkat lunak, arsitektur web, dan pengembangan fullstack terapan.'
      },
      {
        degree: 'Program Vokasi Rekayasa Perangkat Lunak',
        school: 'SMK Wikrama',
        period: 'Lulus: 2018',
        highlight: 'Bogor, Indonesia',
        description:
          'Membangun fondasi kuat dalam pemrograman, quality assurance, dan kolaborasi proyek.'
      }
    ]
  },
  terminal: {
    developer: {
      focus: ['Aplikasi Web yang Skalabel', 'REST API Berperforma Tinggi']
    }
  },
  experience: {
    items: [
      {
        role: 'Frontend Developer',
        impact:
          'Membangun Ocean by BCA, platform ekosistem bisnis terintegrasi yang menghubungkan 34+ juta pelanggan dengan layanan perbankan, operasional, dan jaringan industri.',
        points: [
          'Mengembangkan dan memelihara Ocean by BCA (ocean.bca.co.id), platform ekosistem bisnis komprehensif dengan dashboard terintegrasi, rekomendasi produk, dan fitur myEcosystem.',
          'Menerapkan arsitektur micro frontend menggunakan Next.js untuk mendukung pengembangan modular yang skalabel di berbagai domain bisnis.',
          'Membangun dashboard terintegrasi real-time yang menampilkan arus kas, tren transaksi, dan analitik bisnis untuk pengambilan keputusan berbasis data.',
          'Berkolaborasi dengan tim lintas fungsi untuk menghadirkan fitur yang mendukung 99% transaksi digital dengan pertumbuhan volume 76%.'
        ]
      },
      {
        role: 'Frontend Developer',
        impact:
          'Menghadirkan arsitektur frontend yang dapat digunakan ulang dan UI berfokus performa untuk produk asuransi yang melayani jutaan pemegang polis.',
        points: [
          'Membangun dan memelihara modul berorientasi pelanggan dengan Vue.js 2/3 dan pola state Pinia, menghadirkan fitur manajemen polis, pengajuan klaim, dan pembayaran premi untuk platform web dan mobile web.',
          'Mengubah spesifikasi desain menjadi antarmuka responsif dan aksesibel dengan standar komponen yang konsisten, membangun design system bersama yang dipakai lintas tim produk untuk mengurangi penyimpangan UI.',
          'Mengintegrasikan REST API dan meningkatkan kualitas pengiriman melalui kolaborasi lintas tim dengan engineer backend dan QA, mengurangi defect integrasi dengan menerapkan praktik contract-first development.'
        ]
      },
      {
        role: 'Backend Developer',
        impact:
          'Merancang layanan backend berperforma tinggi untuk infrastruktur perbankan internal yang menangani pemrosesan transaksi yang aman.',
        points: [
          'Mengembangkan dan memelihara OASE, aplikasi perbankan internal yang fokus pada pemrosesan data yang aman, mendukung operasional harian ribuan pengguna internal di cabang BCA.',
          'Merancang RESTful API yang skalabel untuk komunikasi antar modul perbankan — termasuk monitoring transaksi, pipeline pelaporan, dan manajemen pengguna — dengan autentikasi dan kontrol akses berbasis peran.',
          'Mengoptimalkan workflow backend, execution plan query, dan strategi indexing database untuk memastikan ketersediaan tinggi dan respons sub-detik di bawah beban konkurensi berat.'
        ]
      },
      {
        role: 'Fullstack Developer',
        impact:
          'Menghadirkan platform layanan publik berskala nasional untuk program keluarga berencana dan kependudukan di seluruh Indonesia.',
        points: [
          'Mengembangkan layanan inti, dashboard admin, dan kontrol akses berbasis peran untuk Portal BKKBN menggunakan Laravel, memungkinkan tim daerah mengelola data program secara mandiri.',
          'Membangun integrasi RESTful API yang menghubungkan beberapa ekosistem internal BKKBN — termasuk pelaporan KB, data kependudukan, dan pelacakan anggaran daerah — menjadi platform terpadu.',
          'Mengirim dan mempresentasikan solusi siap produksi kepada pemangku kepentingan nasional, memastikan kepatuhan terhadap standar data pemerintah dan persyaratan aksesibilitas.',
          'Memelihara dan mengoptimalkan database MySQL yang menangani dataset kependudukan dan program berskala besar, meningkatkan performa query untuk modul pelaporan.'
        ]
      },
      {
        role: 'Fullstack Developer',
        impact:
          'Memimpin pengembangan sistem manajemen internal dan portal publik untuk tata kelola mineral dan batu bara.',
        points: [
          'Membangun dan men-deploy aplikasi SIDARA dan SUPEL untuk manajemen mineral dan batu bara internal menggunakan CodeIgniter dan Laravel, memungkinkan staf kementerian melacak data perizinan, produksi, dan kepatuhan secara real-time.',
          'Mengembangkan dan memelihara homepage Minerba sebagai portal publik, meningkatkan aksesibilitas regulasi kementerian, dashboard data mineral, dan pengumuman publik bagi warga dan pemangku industri.',
          'Mengimplementasikan logika backend dan pola arsitektur yang kokoh dengan framework Yii dan Laravel, termasuk autentikasi multi-tier, audit logging, dan validasi data untuk kepatuhan pemerintah.',
          'Merancang skema database MySQL ternormalisasi untuk dataset sumber daya mineral, mendukung query pelaporan kompleks lintas operasi tambang regional di seluruh negeri.'
        ]
      },
      {
        role: 'Fullstack Developer',
        impact:
          'Mempercepat alur onboarding asuransi melalui integrasi payment gateway dan API multi-partner.',
        points: [
          'Mengintegrasikan payment gateway Midtrans ke alur pendaftaran asuransi web dan mobile, menangani pembelian polis, perhitungan premi, dan konfirmasi pembayaran real-time.',
          'Menghubungkan API penyedia asuransi eksternal (Zurich, KB, Sinarmas, dan lainnya) untuk mengotomatisasi pengambilan kutipan, penerbitan polis, dan pertukaran data klaim di berbagai perusahaan asuransi.',
          'Mengembangkan RESTful API dengan Lumen (mikro-framework Laravel) untuk orkestrasi backend dan membangun modul frontend interaktif dengan ReactJS untuk portal asuransi berorientasi pelanggan.',
          'Merancang dan mengoptimalkan skema MySQL untuk data polis, pelanggan, dan transaksi, memastikan integritas data di seluruh alur kerja multi-provider.'
        ]
      },
      {
        role: 'Quality Assurance',
        impact:
          'Meningkatkan kepercayaan rilis dan stabilitas produk melalui disiplin pengujian terstruktur dan pelaporan defect yang sistematis.',
        points: [
          'Menjalankan suite pengujian black-box dan regresi di platform web dan mobile sebelum setiap milestone rilis, mengurangi tingkat defect pasca-rilis dengan menangkap masalah sejak awal siklus.',
          'Menyiapkan rencana pengujian, test case, dan checklist QA yang komprehensif untuk siklus UAT dan integration testing, mencakup skenario fungsional, edge-case, dan lintas browser.',
          'Melacak, mendokumentasikan, dan mengkomunikasikan defect dengan developer melalui alur pelaporan terstruktur — dari langkah reproduksi hingga verifikasi dan penutupan — memastikan akuntabilitas dan traceability.',
          'Berkontribusi pada perbaikan proses dengan mengadvokasi praktik shift-left testing dan memelihara knowledge base terpusat berisi masalah berulang dan akar penyebabnya.'
        ]
      }
    ]
  },
  portfolio: {
    items: [
      {
        title: 'Ocean by BCA',
        description:
          'Platform ekosistem bisnis terintegrasi yang menghubungkan 34+ juta pelanggan dengan jaringan perbankan, operasional, dan industri. Dilengkapi dashboard terpadu untuk monitoring arus kas, rekomendasi produk, dan myEcosystem untuk kolaborasi bisnis.',
        info: 'BCA — Platform Bisnis'
      },
      {
        title: 'AIA Insurance Web App',
        description:
          'Portal asuransi komprehensif dan responsif yang dikembangkan menggunakan Vue.js 3, Pinia, dan Vue Router, dirancang untuk menyederhanakan manajemen polis dan meningkatkan pengalaman pengguna pelanggan AIA.',
        info: 'AIA Indonesia — Internal'
      },
      {
        title: 'OASE — BCA',
        description:
          'Sistem API perbankan internal dengan ketersediaan tinggi untuk Bank Central Asia (BCA), dibangun dengan Node.js dan Express. Berfungsi sebagai lapisan middleware penting untuk memproses transaksi aman dan mengelola data keuangan sensitif dengan keamanan tingkat enterprise.',
        info: 'BCA — Internal'
      },
      {
        title: 'SIDARA & SUPEL',
        description:
          'Sistem manajemen internal untuk Kementerian Energi dan Sumber Daya Mineral (ESDM), dirancang untuk memperlancar pelaporan data dan alur kerja administrasi menggunakan CodeIgniter dan Laravel.',
        info: 'Kementerian ESDM — Internal'
      },
      {
        title: 'Minerba Homepage',
        description:
          'Portal publik resmi Direktorat Jenderal Mineral dan Batu Bara, menyediakan informasi dan regulasi real-time yang dibangun dengan framework PHP termasuk Yii dan Laravel.',
        info: 'Kementerian ESDM — Portal Publik'
      },
      {
        title: 'BKKBN Portal & Siga App',
        description:
          'Sistem informasi keluarga berskala nasional (SIGA) yang memfasilitasi pengumpulan data dan analisis demografi di seluruh Indonesia, menampilkan ekosistem API yang kokoh dibangun dengan Laravel dan ReactJS.',
        info: 'BKKBN Indonesia — Proyek Pemerintah'
      },
      {
        title: 'WowPremi',
        description:
          'Platform asuransi digital all-in-one yang terintegrasi dengan Midtrans untuk pemrosesan pembayaran yang mulus. Tersedia di Web, Android, dan iOS untuk memberikan kutipan asuransi instan dan penerbitan polis yang mudah.',
        info: ''
      },
      {
        title: 'BKKBN API Ecosystem',
        description:
          'Infrastruktur RESTful API tingkat enterprise yang berfungsi sebagai pusat data terpadu, menghubungkan dan menyinkronkan beberapa aplikasi internal pemerintah dengan aman untuk memastikan integritas data.',
        info: 'BKKBN Indonesia — Proyek Pemerintah'
      },
      {
        title: 'AIA+',
        description:
          'Ekosistem asuransi digital real-time yang menghubungkan pemegang polis langsung dengan penyedia layanan, menawarkan akses instan ke manfaat kesehatan, status klaim, dan pelacakan kebugaran yang dipersonalisasi.',
        info: 'AIA Indonesia — Berorientasi Pelanggan'
      },
      {
        title: 'OGYA HRIS System',
        description:
          'Sistem Informasi Sumber Daya Manusia (HRIS) yang komprehensif dirancang untuk mengotomatisasi manajemen modal manusia, menampilkan administrasi data karyawan, pelacakan kehadiran, dan alur kerja HR yang efisien.',
        info: ''
      },
      {
        title: 'OGYA Company Profile',
        description:
          'Situs web korporat berperforma tinggi yang dirancang untuk menampilkan layanan bisnis dan budaya perusahaan OGYA, dilengkapi portal karier terintegrasi untuk akuisisi talenta.',
        info: ''
      },
      {
        title: 'SmartCloud Indonesia',
        description:
          'Kerangka pengujian Quality Assurance dan otomatisasi canggih yang diimplementasikan untuk solusi enterprise berbasis cloud, memastikan ketersediaan tinggi, keamanan, dan performa untuk sistem bisnis yang kritis.',
        info: ''
      },
      {
        title: 'Carfix',
        description:
          'Quality Assurance canggih dan pemantauan performa untuk ekosistem e-commerce otomotif yang canggih, memastikan integrasi layanan yang mulus dan pemesanan yang andal untuk layanan otomotif.',
        info: ''
      },
      {
        title: 'Sheldon Dental Management',
        description:
          'Solusi manajemen klinis end-to-end untuk profesional gigi, mengintegrasikan penjadwalan pasien, rekam medis digital, dan pelacakan inventaris untuk meningkatkan efisiensi operasional.',
        info: ''
      },
      {
        title: 'Pins Indonesia',
        description:
          'Antarmuka frontend yang ramping dan interaktif untuk layanan internal Telkom Group, berfokus pada desain berpusat pengguna dan visualisasi data berperforma tinggi.',
        info: 'Pins Indonesia — Telkom Group'
      }
    ]
  }
}
