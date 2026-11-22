// NIOS Secondary Courses (Class 10) Comprehensive Curriculum Database
// Source: https://nios.ac.in/online-course-material/secondary-courses.aspx
// Connected directly to Official @NIOSSecondaryCourses YouTube Channel

export const NIOS_CHANNEL_URL = 'https://www.youtube.com/@NIOSSecondaryCourses';

export const SUBJECTS = [
  {
    "id": "math-211",
    "code": "211",
    "name": "Mathematics",
    "hindiName": "गणित",
    "icon": "📐",
    "color": "#3b82f6",
    "lessonCountText": "12 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "Number systems, algebra, geometry, trigonometry & statistics for secondary certification.",
    "lessons": [
      {
        "id": "math-l1",
        "number": 1,
        "title": "Number Systems",
        "hindiTitle": "संख्या पद्धतियाँ",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/kuS0bljhJdM",
        "backupVideoUrl": "https://www.youtube.com/embed/AGQlSuBCQwk",
        "searchEmbedUrl": "https://www.youtube.com/embed/AGQlSuBCQwk",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=kuS0bljhJdM",
        "overview": "Natural numbers, whole numbers, integers, rational & irrational numbers, decimal expansions, and rationalizing the denominator.",
        "keyConcepts": [
          "Rational Numbers: Expressible as p/q (p, q in Z, q != 0).",
          "Irrational Numbers: Non-terminating, non-recurring decimals (sqrt(2), sqrt(3), pi).",
          "Real Numbers: Union of rationals and irrationals spanning the continuous real number line.",
          "Rationalization: Multiplying numerator and denominator by conjugate radical."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Real Numbers Introduction"
          },
          {
            "time": "07:20",
            "title": "Rational vs Irrational Proofs"
          },
          {
            "time": "16:40",
            "title": "Rationalizing Surd Denominators"
          }
        ],
        "quizzes": [
          {
            "id": "m1-q1",
            "question": "Which of the following is an irrational number?",
            "options": [
              "22/7",
              "sqrt(4)",
              "sqrt(5)",
              "0.3333..."
            ],
            "correctIndex": 2,
            "explanation": "sqrt(5) cannot be expressed as p/q with integers; its decimal expansion never terminates or repeats."
          },
          {
            "id": "m1-q2",
            "question": "The decimal representation of 7/80 terminates after how many places?",
            "options": [
              "2 places",
              "3 places",
              "4 places",
              "Does not terminate"
            ],
            "correctIndex": 2,
            "explanation": "80 = 2^4 * 5^1. Highest exponent is 4, terminating after 4 decimal digits (0.0875)."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l2",
        "number": 2,
        "title": "Exponents and Radicals",
        "hindiTitle": "घातांक और करणी",
        "duration": "32 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/SL0uuye4NMM",
        "backupVideoUrl": "https://www.youtube.com/embed/9WgkSj4x13U",
        "searchEmbedUrl": "https://www.youtube.com/embed/9WgkSj4x13U",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=SL0uuye4NMM",
        "overview": "Laws of integral & fractional exponents, simplification of surds, comparing surds of different orders, and radical operations from official NIOS lectures.",
        "keyConcepts": [
          "Exponent Rules: a^m * a^n = a^(m+n), a^m / a^n = a^(m-n), (a^m)^n = a^(mn).",
          "Fractional Exponents: a^(m/n) = n_root(a^m).",
          "Pure Surd to Mixed Surd: sqrt(50) = sqrt(25*2) = 5*sqrt(2).",
          "Comparing Surds: Take LCM of the orders to compare."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Laws of Indices & Exponents"
          },
          {
            "time": "09:15",
            "title": "Radicals & Order of Surds"
          },
          {
            "time": "19:40",
            "title": "Operations on Mixed Surds"
          }
        ],
        "quizzes": [
          {
            "id": "m2-q1",
            "question": "What is the value of (64)^(-2/3)?",
            "options": [
              "1/16",
              "16",
              "1/8",
              "8"
            ],
            "correctIndex": 0,
            "explanation": "64 = 4^3. (4^3)^(-2/3) = 4^(-2) = 1/16."
          },
          {
            "id": "m2-q2",
            "question": "Simplify sqrt(72) into simplest mixed surd form:",
            "options": [
              "3*sqrt(8)",
              "6*sqrt(2)",
              "2*sqrt(18)",
              "12*sqrt(2)"
            ],
            "correctIndex": 1,
            "explanation": "sqrt(72) = sqrt(36 * 2) = 6*sqrt(2)."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l3",
        "number": 3,
        "title": "Algebraic Expressions & Polynomials",
        "hindiTitle": "बीजीय व्यंजक और बहुपद",
        "duration": "35 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/q88b50w1C4Q",
        "backupVideoUrl": "https://www.youtube.com/embed/7Vn1B9cQkL0",
        "searchEmbedUrl": "https://www.youtube.com/embed/7Vn1B9cQkL0",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=q88b50w1C4Q",
        "overview": "Classification of polynomials by degree, addition, subtraction, long division algorithm, Remainder Theorem and Factor Theorem.",
        "keyConcepts": [
          "Degree: Highest power of variable in non-zero polynomial.",
          "Division Algorithm: Dividend = Divisor * Quotient + Remainder.",
          "Remainder Theorem: When P(x) is divided by (x - a), remainder = P(a).",
          "Factor Theorem: (x - a) is a factor if and only if P(a) = 0."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Classification & Degree"
          },
          {
            "time": "12:30",
            "title": "Polynomial Long Division"
          },
          {
            "time": "23:10",
            "title": "Remainder & Factor Theorems"
          }
        ],
        "quizzes": [
          {
            "id": "m3-q1",
            "question": "Find the remainder when P(x) = x^3 - 2x^2 + 3x - 4 is divided by (x - 1):",
            "options": [
              "-2",
              "0",
              "2",
              "4"
            ],
            "correctIndex": 0,
            "explanation": "P(1) = 1 - 2 + 3 - 4 = -2."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l4",
        "number": 4,
        "title": "Special Products and Factorization",
        "hindiTitle": "विशेष गुणनफल और गुणनखंडन",
        "duration": "30 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/7Vn1B9cQkL0",
        "backupVideoUrl": "https://www.youtube.com/embed/q88b50w1C4Q",
        "searchEmbedUrl": "https://www.youtube.com/embed/q88b50w1C4Q",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=7Vn1B9cQkL0",
        "overview": "Crucial identities: (a+b+c)^2, (a+-b)^3, a^3+-b^3, factoring quadratic trinomials by splitting the middle term.",
        "keyConcepts": [
          "(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca",
          "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
          "If a + b + c = 0, then a^3 + b^3 + c^3 = 3abc"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Expansion Identities"
          },
          {
            "time": "14:20",
            "title": "Cubic Factorization"
          },
          {
            "time": "22:15",
            "title": "Splitting the Middle Term"
          }
        ],
        "quizzes": [
          {
            "id": "m4-q1",
            "question": "If a + b + c = 0, what is the value of a^3 + b^3 + c^3?",
            "options": [
              "0",
              "abc",
              "3abc",
              "(a+b+c)^3"
            ],
            "correctIndex": 2,
            "explanation": "When a + b + c = 0, a^3 + b^3 + c^3 = 3abc."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l5",
        "number": 5,
        "title": "Linear Equations in One & Two Variables",
        "hindiTitle": "रैखिक समीकरण",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/tA8t_aHh72w",
        "backupVideoUrl": "https://www.youtube.com/embed/5g4KqJ9_0fU",
        "searchEmbedUrl": "https://www.youtube.com/embed/5g4KqJ9_0fU",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=tA8t_aHh72w",
        "overview": "Algebraic solution methods (substitution, elimination), Cartesian plotting, conditions for consistency (intersecting, parallel, coincident).",
        "keyConcepts": [
          "Unique solution: a1/a2 != b1/b2",
          "No solution (parallel): a1/a2 = b1/b2 != c1/c2",
          "Infinitely many solutions: a1/a2 = b1/b2 = c1/c2"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Formulating Linear Models"
          },
          {
            "time": "11:15",
            "title": "Elimination Method"
          },
          {
            "time": "18:50",
            "title": "Graphical Consistency"
          }
        ],
        "quizzes": [
          {
            "id": "m5-q1",
            "question": "For parallel lines with no solution, what is the ratio condition?",
            "options": [
              "a1/a2 != b1/b2",
              "a1/a2 = b1/b2 = c1/c2",
              "a1/a2 = b1/b2 != c1/c2",
              "a1 = b1"
            ],
            "correctIndex": 2,
            "explanation": "Slopes are equal but intercepts differ, meaning parallel lines that never intersect."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l6",
        "number": 6,
        "title": "Quadratic Equations",
        "hindiTitle": "द्विघात समीकरण",
        "duration": "31 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/5g4KqJ9_0fU",
        "backupVideoUrl": "https://www.youtube.com/embed/tA8t_aHh72w",
        "searchEmbedUrl": "https://www.youtube.com/embed/tA8t_aHh72w",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=5g4KqJ9_0fU",
        "overview": "Standard form ax^2 + bx + c = 0, discriminant D = b^2 - 4ac, quadratic formula, nature of roots (real, distinct, equal, imaginary).",
        "keyConcepts": [
          "Quadratic Formula: x = (-b +- sqrt(D)) / (2a)",
          "Discriminant D > 0: Two distinct real roots",
          "Discriminant D = 0: Two equal real roots (x = -b/2a)",
          "Discriminant D < 0: No real roots"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Standard Form & Factorization"
          },
          {
            "time": "12:40",
            "title": "Quadratic Formula Derivation"
          },
          {
            "time": "21:30",
            "title": "Nature of Roots & Discriminant"
          }
        ],
        "quizzes": [
          {
            "id": "m6-q1",
            "question": "If the discriminant D of ax^2 + bx + c = 0 is zero, the roots are:",
            "options": [
              "Real and distinct",
              "Real and equal",
              "Imaginary",
              "Zero"
            ],
            "correctIndex": 1,
            "explanation": "When D = 0, both roots equal -b / (2a)."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l7",
        "number": 7,
        "title": "Arithmetic Progressions (AP)",
        "hindiTitle": "समान्तर श्रेढ़ी",
        "duration": "29 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/AGQlSuBCQwk",
        "backupVideoUrl": "https://www.youtube.com/embed/kuS0bljhJdM",
        "searchEmbedUrl": "https://www.youtube.com/embed/kuS0bljhJdM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=AGQlSuBCQwk",
        "overview": "First term a, common difference d, general nth term a_n = a + (n-1)d, and sum of first n terms S_n = n/2 [2a + (n-1)d].",
        "keyConcepts": [
          "nth term: a_n = a + (n - 1)d",
          "Sum of n terms: S_n = (n/2)[2a + (n-1)d] = (n/2)(a + l)",
          "Arithmetic Mean (AM) between a and b: (a + b) / 2"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Definition of AP & Common Difference"
          },
          {
            "time": "10:15",
            "title": "Finding the nth Term"
          },
          {
            "time": "19:45",
            "title": "Sum of n Terms Formula"
          }
        ],
        "quizzes": [
          {
            "id": "m7-q1",
            "question": "What is the 10th term of the AP: 2, 7, 12, 17...?",
            "options": [
              "42",
              "47",
              "52",
              "37"
            ],
            "correctIndex": 1,
            "explanation": "a = 2, d = 5. a_10 = 2 + (10 - 1)*5 = 2 + 45 = 47."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l8",
        "number": 8,
        "title": "Lines and Angles",
        "hindiTitle": "रेखाएँ और कोण",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/5bYI7XS13uE",
        "backupVideoUrl": "https://www.youtube.com/embed/yp49bc4TT-s",
        "searchEmbedUrl": "https://www.youtube.com/embed/yp49bc4TT-s",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=5bYI7XS13uE",
        "overview": "Axioms of straight lines, supplementary & complementary angles, linear pair axiom, vertically opposite angles, parallel lines & transversal angles.",
        "keyConcepts": [
          "Linear Pair Axiom: Sum of two adjacent angles on a straight line is 180 degrees.",
          "Vertically Opposite Angles: Always equal.",
          "Parallel Lines & Transversal: Corresponding angles equal, alternate interior angles equal, co-interior sum = 180 degrees."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Basic Geometric Definitions"
          },
          {
            "time": "09:30",
            "title": "Linear Pairs & Vertical Angles"
          },
          {
            "time": "18:10",
            "title": "Transversals & Parallel Lines"
          }
        ],
        "quizzes": [
          {
            "id": "m8-q1",
            "question": "If two interior angles on the same side of a transversal are (2x + 10) deg and (3x + 20) deg, find x:",
            "options": [
              "30 deg",
              "25 deg",
              "35 deg",
              "40 deg"
            ],
            "correctIndex": 0,
            "explanation": "Co-interior angles sum to 180: 2x + 10 + 3x + 20 = 180 => 5x = 150 => x = 30."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l9",
        "number": 9,
        "title": "Congruence of Triangles",
        "hindiTitle": "त्रिभुजों की सर्वांगसमता",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/yp49bc4TT-s",
        "backupVideoUrl": "https://www.youtube.com/embed/5bYI7XS13uE",
        "searchEmbedUrl": "https://www.youtube.com/embed/5bYI7XS13uE",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=yp49bc4TT-s",
        "overview": "Criteria for congruence of triangles: SAS, ASA, AAS, SSS, and RHS theorems with proof constructions.",
        "keyConcepts": [
          "SAS: Two sides and included angle equal.",
          "ASA / AAS: Two angles and one side equal.",
          "SSS: All three corresponding sides equal.",
          "RHS: Right angle, hypotenuse, and one side equal."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Concept of Congruence"
          },
          {
            "time": "11:00",
            "title": "SAS, ASA and SSS Criteria"
          },
          {
            "time": "20:15",
            "title": "RHS Theorem Proofs"
          }
        ],
        "quizzes": [
          {
            "id": "m9-q1",
            "question": "Which of the following is NOT a criterion for congruence of triangles?",
            "options": [
              "SSS",
              "SAS",
              "AAA",
              "RHS"
            ],
            "correctIndex": 2,
            "explanation": "AAA guarantees similarity (equal shape), but not necessarily congruence (equal size)."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l10",
        "number": 10,
        "title": "Quadrilaterals",
        "hindiTitle": "चतुर्भुज",
        "duration": "30 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/ZlQZ0EMCKhc",
        "backupVideoUrl": "https://www.youtube.com/embed/yp49bc4TT-s",
        "searchEmbedUrl": "https://www.youtube.com/embed/yp49bc4TT-s",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=ZlQZ0EMCKhc",
        "overview": "Angle sum property (360 degrees), properties of parallelogram, rectangle, rhombus, square, and Mid-Point Theorem.",
        "keyConcepts": [
          "Parallelogram: Opposite sides and angles equal; diagonals bisect each other.",
          "Rhombus: Diagonals bisect at right angles (90 degrees).",
          "Mid-Point Theorem: Line segment joining midpoints of two sides of a triangle is parallel to third side and half its length."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Quadrilateral Types & Angle Sum"
          },
          {
            "time": "12:20",
            "title": "Parallelogram Theorems"
          },
          {
            "time": "21:40",
            "title": "Mid-Point Theorem"
          }
        ],
        "quizzes": [
          {
            "id": "m10-q1",
            "question": "In a rhombus, the diagonals intersect at what angle?",
            "options": [
              "45 deg",
              "60 deg",
              "90 deg",
              "120 deg"
            ],
            "correctIndex": 2,
            "explanation": "A defining property of a rhombus is perpendicular diagonals (90 degrees)."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l11",
        "number": 11,
        "title": "Similarity of Triangles",
        "hindiTitle": "त्रिभुजों की समरूपता",
        "duration": "32 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/9ThXDY9Y3oU",
        "backupVideoUrl": "https://www.youtube.com/embed/ZlQZ0EMCKhc",
        "searchEmbedUrl": "https://www.youtube.com/embed/ZlQZ0EMCKhc",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=9ThXDY9Y3oU",
        "overview": "Basic Proportionality Theorem (Thales' Theorem), criteria for similarity (AAA, SSS, SAS), ratio of areas of similar triangles.",
        "keyConcepts": [
          "Thales' Theorem: Line parallel to one side divides other two sides in the same ratio.",
          "Ratio of Areas: Equal to square of ratio of corresponding sides."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Similarity vs Congruence"
          },
          {
            "time": "13:10",
            "title": "Basic Proportionality Theorem"
          },
          {
            "time": "22:50",
            "title": "Area Ratio Theorem"
          }
        ],
        "quizzes": [
          {
            "id": "m11-q1",
            "question": "If two similar triangles have sides in ratio 3:5, what is the ratio of their areas?",
            "options": [
              "3:5",
              "6:10",
              "9:25",
              "27:125"
            ],
            "correctIndex": 2,
            "explanation": "Area ratio = (3/5)^2 = 9/25."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "math-l12",
        "number": 12,
        "title": "Circles and Introduction to Trigonometry",
        "hindiTitle": "वृत्त और त्रिकोणमिति",
        "duration": "34 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/Jsiy4TxgIME",
        "backupVideoUrl": "https://www.youtube.com/embed/AGQlSuBCQwk",
        "searchEmbedUrl": "https://www.youtube.com/embed/AGQlSuBCQwk",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=Jsiy4TxgIME",
        "overview": "Tangent to a circle, length of tangents from external point, trigonometric ratios (sin, cos, tan), and standard angle values (0, 30, 45, 60, 90 deg).",
        "keyConcepts": [
          "Tangent Theorem: Tangent is perpendicular to radius at point of contact.",
          "External Tangents: Tangents drawn from external point to circle are equal in length.",
          "Trig Ratios: sin = P/H, cos = B/H, tan = P/B."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Circle Theorems & Tangents"
          },
          {
            "time": "15:20",
            "title": "Trigonometric Ratios"
          },
          {
            "time": "24:10",
            "title": "Standard Angles Table"
          }
        ],
        "quizzes": [
          {
            "id": "m12-q1",
            "question": "What is the value of sin 30 deg + cos 60 deg?",
            "options": [
              "1/2",
              "1",
              "sqrt(3)/2",
              "0"
            ],
            "correctIndex": 1,
            "explanation": "sin 30 deg = 1/2, cos 60 deg = 1/2. Sum = 1/2 + 1/2 = 1."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  },
  {
    "id": "sci-212",
    "code": "212",
    "name": "Science & Technology",
    "hindiName": "विज्ञान और प्रौद्योगिकी",
    "icon": "🔬",
    "color": "#10b981",
    "lessonCountText": "12 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "Matter, atoms, chemical bonding, laws of motion, gravitation, energy & environmental sciences.",
    "lessons": [
      {
        "id": "sci-l1",
        "number": 1,
        "title": "Measurement in Science",
        "hindiTitle": "विज्ञान में मापन",
        "duration": "24 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/hQpQ0hxVNTg",
        "backupVideoUrl": "https://www.youtube.com/embed/ZM8ECpBuQYE",
        "searchEmbedUrl": "https://www.youtube.com/embed/ZM8ECpBuQYE",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=hQpQ0hxVNTg",
        "overview": "International System of Units (SI), base units (meter, kilogram, second, ampere, kelvin, mole, candela), derived units, vernier caliper and screw gauge.",
        "keyConcepts": [
          "7 Fundamental SI Units: Length (m), Mass (kg), Time (s), Current (A), Temp (K), Amount (mol), Luminous intensity (cd).",
          "Prefixes: micro (10^-6), milli (10^-3), kilo (10^3), mega (10^6)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Need for Standard Measurement"
          },
          {
            "time": "08:15",
            "title": "7 Base Units of SI System"
          },
          {
            "time": "15:40",
            "title": "Least Count & Precision"
          }
        ],
        "quizzes": [
          {
            "id": "s1-q1",
            "question": "What is the SI unit of thermodynamic temperature?",
            "options": [
              "Celsius",
              "Fahrenheit",
              "Kelvin",
              "Joule"
            ],
            "correctIndex": 2,
            "explanation": "Kelvin (K) is the SI base unit of temperature."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l2",
        "number": 2,
        "title": "Matter in Our Surroundings",
        "hindiTitle": "हमारे आस-पास का पदार्थ",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/BqQJPCdmIp8",
        "backupVideoUrl": "https://www.youtube.com/embed/hQpQ0hxVNTg",
        "searchEmbedUrl": "https://www.youtube.com/embed/hQpQ0hxVNTg",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=BqQJPCdmIp8",
        "overview": "Kinetic theory of matter, solid, liquid and gas states, phase changes, latent heat of fusion/vaporization, and factors affecting evaporation.",
        "keyConcepts": [
          "States of Matter: Solid (fixed shape/vol), Liquid (fixed vol, no fixed shape), Gas (neither).",
          "Sublimation: Direct transition from solid to gas without liquid state (Camphor, Dry Ice)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Particulate Nature of Matter"
          },
          {
            "time": "10:10",
            "title": "States & Kinetic Theory"
          },
          {
            "time": "19:00",
            "title": "Latent Heat & Cooling by Evaporation"
          }
        ],
        "quizzes": [
          {
            "id": "s2-q1",
            "question": "The direct change of state from solid to gas without melting is called:",
            "options": [
              "Evaporation",
              "Sublimation",
              "Condensation",
              "Fusion"
            ],
            "correctIndex": 1,
            "explanation": "Sublimation is the direct transition from solid to gaseous state."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l3",
        "number": 3,
        "title": "Atom and Molecules",
        "hindiTitle": "परमाणु और अणु",
        "duration": "30 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/FSyAehMdpyI",
        "backupVideoUrl": "https://www.youtube.com/embed/0RRVV4Diomg",
        "searchEmbedUrl": "https://www.youtube.com/embed/0RRVV4Diomg",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=FSyAehMdpyI",
        "overview": "Law of Conservation of Mass, Law of Constant Proportions, Dalton's Atomic Theory, atomic mass unit (amu), molecular mass, and mole concept.",
        "keyConcepts": [
          "Avogadro's Number: 1 mole = 6.022 * 10^23 entities.",
          "Molar Mass: Mass of 1 mole of substance in grams.",
          "Dalton's Postulates: Atoms are indivisible, indestructible particles of matter."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Chemical Combination Laws"
          },
          {
            "time": "11:20",
            "title": "Dalton's Atomic Theory"
          },
          {
            "time": "20:45",
            "title": "The Mole Concept"
          }
        ],
        "quizzes": [
          {
            "id": "s3-q1",
            "question": "How many atoms are in one mole of any pure substance?",
            "options": [
              "3.011 * 10^23",
              "6.022 * 10^23",
              "9.11 * 10^-31",
              "1.6 * 10^-19"
            ],
            "correctIndex": 1,
            "explanation": "Avogadro constant N_A = 6.022 * 10^23 particles/mol."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l4",
        "number": 4,
        "title": "Chemical Reaction and Equations",
        "hindiTitle": "रासायनिक अभिक्रियाएं और समीकरण",
        "duration": "32 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/IIu16dy3ThI",
        "backupVideoUrl": "https://www.youtube.com/embed/FSyAehMdpyI",
        "searchEmbedUrl": "https://www.youtube.com/embed/FSyAehMdpyI",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=IIu16dy3ThI",
        "overview": "Balancing chemical equations, combination, decomposition, displacement, double displacement, redox reactions, corrosion and rancidity.",
        "keyConcepts": [
          "Redox: Oxidation is loss of electrons/addition of oxygen; Reduction is gain of electrons.",
          "Balancing: Balancing ensures atoms on reactant side equal product side (Conservation of Mass)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Types of Reactions"
          },
          {
            "time": "13:30",
            "title": "Balancing Equations"
          },
          {
            "time": "22:15",
            "title": "Oxidation & Reduction"
          }
        ],
        "quizzes": [
          {
            "id": "s4-q1",
            "question": "The reaction 2Mg + O2 -> 2MgO is an example of:",
            "options": [
              "Decomposition",
              "Combination",
              "Displacement",
              "Neutralization"
            ],
            "correctIndex": 1,
            "explanation": "Two reactants combine to form a single product."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l5",
        "number": 5,
        "title": "Atomic Structure",
        "hindiTitle": "परमाणु संरचना",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/FSyAehMdpyI",
        "backupVideoUrl": "https://www.youtube.com/embed/0RRVV4Diomg",
        "searchEmbedUrl": "https://www.youtube.com/embed/0RRVV4Diomg",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=FSyAehMdpyI",
        "overview": "Discovery of electron (Thomson), proton (Rutherford alpha scattering experiment), neutron (Chadwick), Bohr's model, electronic configuration (2n^2 rule), valency.",
        "keyConcepts": [
          "Bohr's Postulate: Electrons revolve in stationary non-radiating orbits (shells K, L, M, N).",
          "Mass Number A: Number of protons + neutrons in nucleus."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Subatomic Particles"
          },
          {
            "time": "10:15",
            "title": "Rutherford vs Bohr Models"
          },
          {
            "time": "18:40",
            "title": "Electron Distribution (2n^2)"
          }
        ],
        "quizzes": [
          {
            "id": "s5-q1",
            "question": "What is the maximum number of electrons that can occupy the M shell (n = 3)?",
            "options": [
              "8",
              "18",
              "32",
              "2"
            ],
            "correctIndex": 1,
            "explanation": "Formula is 2n^2: 2*(3^2) = 2*9 = 18."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l6",
        "number": 6,
        "title": "Periodic Classification of Elements",
        "hindiTitle": "तत्वों का आवर्त वर्गीकरण",
        "duration": "29 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/0RRVV4Diomg",
        "backupVideoUrl": "https://www.youtube.com/embed/QXT4OVM4vXI",
        "searchEmbedUrl": "https://www.youtube.com/embed/QXT4OVM4vXI",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=0RRVV4Diomg",
        "overview": "Dobereiner triads, Newlands octaves, Mendeleev periodic law, Modern Periodic Law (Moseley, based on atomic number), periodic trends.",
        "keyConcepts": [
          "Modern Periodic Law: Properties of elements are periodic functions of their atomic numbers.",
          "Trends: Atomic radius decreases across period, increases down group."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Early Classification Attempts"
          },
          {
            "time": "11:20",
            "title": "Mendeleev's Table"
          },
          {
            "time": "20:00",
            "title": "Modern Periodic Trends"
          }
        ],
        "quizzes": [
          {
            "id": "s6-q1",
            "question": "The Modern Periodic Table arranges elements in order of increasing:",
            "options": [
              "Atomic mass",
              "Atomic number",
              "Density",
              "Valency"
            ],
            "correctIndex": 1,
            "explanation": "Henry Moseley established that atomic number (Z) is the fundamental property."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l7",
        "number": 7,
        "title": "Chemical Bonding",
        "hindiTitle": "रासायनिक आबंधन",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/QXT4OVM4vXI",
        "backupVideoUrl": "https://www.youtube.com/embed/0RRVV4Diomg",
        "searchEmbedUrl": "https://www.youtube.com/embed/0RRVV4Diomg",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=QXT4OVM4vXI",
        "overview": "Octet rule, ionic/electrovalent bonds (electron transfer), covalent bonds (electron sharing: single, double, triple), properties comparison.",
        "keyConcepts": [
          "Ionic Bond: Formed between metal and non-metal via electrostatic attraction (NaCl).",
          "Covalent Bond: Formed between non-metals via electron sharing (H2O, CH4)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Octet Rule & Stability"
          },
          {
            "time": "10:30",
            "title": "Ionic Compounds"
          },
          {
            "time": "19:15",
            "title": "Covalent Molecules"
          }
        ],
        "quizzes": [
          {
            "id": "s7-q1",
            "question": "Which type of bond involves the complete transfer of electrons?",
            "options": [
              "Covalent bond",
              "Ionic bond",
              "Coordinate bond",
              "Hydrogen bond"
            ],
            "correctIndex": 1,
            "explanation": "Ionic bonds form when one atom transfers electrons to another."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l8",
        "number": 8,
        "title": "Acids, Bases and Salts",
        "hindiTitle": "अम्ल, क्षारक और लवण",
        "duration": "31 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/ANi709MYnWg",
        "backupVideoUrl": "https://www.youtube.com/embed/IIu16dy3ThI",
        "searchEmbedUrl": "https://www.youtube.com/embed/IIu16dy3ThI",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=ANi709MYnWg",
        "overview": "Arrhenius definition (H+ and OH- ions), indicators (litmus, phenolphthalein), pH scale, neutralization reaction, common salts (Baking Soda, Bleaching Powder, Plaster of Paris).",
        "keyConcepts": [
          "pH Scale: pH < 7 acidic, pH = 7 neutral, pH > 7 basic.",
          "Neutralization: Acid + Base -> Salt + Water."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Indicators & Properties"
          },
          {
            "time": "12:00",
            "title": "The pH Scale in Daily Life"
          },
          {
            "time": "21:30",
            "title": "Industrial Salts"
          }
        ],
        "quizzes": [
          {
            "id": "s8-q1",
            "question": "What is the pH of pure neutral water at 25 degrees C?",
            "options": [
              "0",
              "7",
              "14",
              "1"
            ],
            "correctIndex": 1,
            "explanation": "Neutral solutions have a pH of exactly 7."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l9",
        "number": 9,
        "title": "Motion and its Description",
        "hindiTitle": "गति और उसका वर्णन",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/ZM8ECpBuQYE",
        "backupVideoUrl": "https://www.youtube.com/embed/kKKM8Y-u7ds",
        "searchEmbedUrl": "https://www.youtube.com/embed/kKKM8Y-u7ds",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=ZM8ECpBuQYE",
        "overview": "Distance vs displacement, speed vs velocity, uniform & non-uniform acceleration, graphs (s-t, v-t), and the three kinematic equations.",
        "keyConcepts": [
          "Three Equations of Motion: v = u + at, s = ut + (1/2)at^2, v^2 = u^2 + 2as.",
          "Slope of v-t graph gives acceleration; area under v-t graph gives distance."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Scalars vs Vectors"
          },
          {
            "time": "11:15",
            "title": "Graphical Analysis of Motion"
          },
          {
            "time": "19:45",
            "title": "Kinematic Equations Derivation"
          }
        ],
        "quizzes": [
          {
            "id": "s9-q1",
            "question": "What does the slope of a velocity-time graph represent?",
            "options": [
              "Distance",
              "Displacement",
              "Acceleration",
              "Speed"
            ],
            "correctIndex": 2,
            "explanation": "a = Delta v / Delta t, which is the gradient (slope) of the v-t graph."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l10",
        "number": 10,
        "title": "Force and Motion",
        "hindiTitle": "बल और गति",
        "duration": "30 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/kKKM8Y-u7ds",
        "backupVideoUrl": "https://www.youtube.com/embed/ZM8ECpBuQYE",
        "searchEmbedUrl": "https://www.youtube.com/embed/ZM8ECpBuQYE",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=kKKM8Y-u7ds",
        "overview": "Newton's three laws of motion, inertia, momentum (p = mv), impulse, action-reaction pairs, and law of conservation of linear momentum.",
        "keyConcepts": [
          "Newton's 1st Law: Law of Inertia.",
          "Newton's 2nd Law: F = dp/dt = ma.",
          "Newton's 3rd Law: To every action there is an equal and opposite reaction."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Inertia & First Law"
          },
          {
            "time": "12:30",
            "title": "Second Law: F = ma"
          },
          {
            "time": "21:10",
            "title": "Conservation of Momentum"
          }
        ],
        "quizzes": [
          {
            "id": "s10-q1",
            "question": "A force of 10 N acts on a mass of 2 kg. What is the resulting acceleration?",
            "options": [
              "5 m/s^2",
              "20 m/s^2",
              "0.2 m/s^2",
              "12 m/s^2"
            ],
            "correctIndex": 0,
            "explanation": "a = F / m = 10 / 2 = 5 m/s^2."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l11",
        "number": 11,
        "title": "Gravitation",
        "hindiTitle": "गुरुत्वाकर्षण",
        "duration": "29 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/7gf6YpdvtE0",
        "backupVideoUrl": "https://www.youtube.com/embed/w4QFJb9a8vo",
        "searchEmbedUrl": "https://www.youtube.com/embed/w4QFJb9a8vo",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=7gf6YpdvtE0",
        "overview": "Universal Law of Gravitation (F = G*m1*m2/r^2), acceleration due to gravity (g = 9.8 m/s^2), free fall, mass vs weight, thrust and pressure, Archimedes' Principle.",
        "keyConcepts": [
          "Universal Constant G: 6.674 * 10^-11 N m^2/kg^2.",
          "Mass is constant everywhere; Weight (W = mg) varies with local gravity."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Newton's Gravitational Law"
          },
          {
            "time": "11:00",
            "title": "Acceleration g vs Universal G"
          },
          {
            "time": "20:00",
            "title": "Mass vs Weight & Buoyancy"
          }
        ],
        "quizzes": [
          {
            "id": "s11-q1",
            "question": "What is the weight on Earth of an object with a mass of 10 kg? (take g = 9.8 m/s^2)",
            "options": [
              "10 N",
              "98 N",
              "9.8 N",
              "980 N"
            ],
            "correctIndex": 1,
            "explanation": "W = m * g = 10 * 9.8 = 98 N."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "sci-l12",
        "number": 12,
        "title": "Work and Energy",
        "hindiTitle": "कार्य और ऊर्जा",
        "duration": "31 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/w4QFJb9a8vo",
        "backupVideoUrl": "https://www.youtube.com/embed/kKKM8Y-u7ds",
        "searchEmbedUrl": "https://www.youtube.com/embed/kKKM8Y-u7ds",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=w4QFJb9a8vo",
        "overview": "Scientific definition of work (W = F * s * cos theta), kinetic energy (1/2 mv^2), gravitational potential energy (mgh), law of conservation of energy, power (P = W/t).",
        "keyConcepts": [
          "Work Unit: 1 Joule = 1 N * 1 m.",
          "Conservation of Mechanical Energy: E_total = K.E. + P.E. remains constant in conservative field."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Work Definition & Conditions"
          },
          {
            "time": "12:15",
            "title": "Kinetic vs Potential Energy"
          },
          {
            "time": "21:40",
            "title": "Conservation of Energy & Power"
          }
        ],
        "quizzes": [
          {
            "id": "s12-q1",
            "question": "If the velocity of an object is doubled, what happens to its kinetic energy?",
            "options": [
              "Doubles",
              "Remains unchanged",
              "Quadruples (4x)",
              "Halves"
            ],
            "correctIndex": 2,
            "explanation": "KE is proportional to v^2; doubling v multiplies KE by 2^2 = 4."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  },
  {
    "id": "soc-213",
    "code": "213",
    "name": "Social Science",
    "hindiName": "सामाजिक विज्ञान",
    "icon": "🌍",
    "color": "#f59e0b",
    "lessonCountText": "10 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "World civilizations, Indian freedom struggle, constitution, physiography & environment.",
    "lessons": [
      {
        "id": "soc-l1",
        "number": 1,
        "title": "Ancient World",
        "hindiTitle": "प्राचीन विश्व",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/n7ndRwqJYDM",
        "backupVideoUrl": "https://www.youtube.com/embed/sohXPx_XZ6Y",
        "searchEmbedUrl": "https://www.youtube.com/embed/sohXPx_XZ6Y",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=n7ndRwqJYDM",
        "overview": "River valley civilizations: Harappan, Mesopotamian, Nile Valley (Egypt), and Hwang-Ho (China), bronze age urban planning, scripts, and trade.",
        "keyConcepts": [
          "Harappan Civilization: Advanced town planning, grid system, Great Bath.",
          "Mesopotamia: Tigris & Euphrates rivers, Cuneiform writing system."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "River Valley Foundations"
          },
          {
            "time": "10:15",
            "title": "Harappan Architecture & Town Planning"
          },
          {
            "time": "19:00",
            "title": "Egypt & Mesopotamia Contributions"
          }
        ],
        "quizzes": [
          {
            "id": "ss1-q1",
            "question": "Along which river did the ancient Egyptian civilization flourish?",
            "options": [
              "Tigris",
              "Nile",
              "Indus",
              "Euphrates"
            ],
            "correctIndex": 1,
            "explanation": "Egypt is historically known as the 'Gift of the Nile'."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "soc-l2",
        "number": 2,
        "title": "Medieval World",
        "hindiTitle": "मध्यकालीन विश्व",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/QV7CanyzhZg",
        "backupVideoUrl": "https://www.youtube.com/embed/n7ndRwqJYDM",
        "searchEmbedUrl": "https://www.youtube.com/embed/n7ndRwqJYDM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=QV7CanyzhZg",
        "overview": "Feudalism in medieval Europe, manor system, rise of Islam and Arab civilization, Byzantine empire, Crusades, and Silk Route cultural exchanges.",
        "keyConcepts": [
          "Feudal Hierarchy: King, Lords, Vassals, Knights, Serfs.",
          "Islamic Golden Age: Translations of Greek classics, advancements in algebra, medicine, optics."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Decline of Roman Empire"
          },
          {
            "time": "11:30",
            "title": "European Feudal Society"
          },
          {
            "time": "20:00",
            "title": "Arab Advancements in Science"
          }
        ],
        "quizzes": [
          {
            "id": "ss2-q1",
            "question": "Under feudalism, peasant laborers bound to work on their lord's estate were known as:",
            "options": [
              "Knights",
              "Serfs",
              "Barons",
              "Guilds"
            ],
            "correctIndex": 1,
            "explanation": "Serfs were unfree agricultural workers tied to feudal manors."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "soc-l3",
        "number": 3,
        "title": "Modern World I",
        "hindiTitle": "आधुनिक विश्व - भाग १",
        "duration": "29 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/Vufba_ZcoR0",
        "backupVideoUrl": "https://www.youtube.com/embed/lTTvKwCylFY",
        "searchEmbedUrl": "https://www.youtube.com/embed/lTTvKwCylFY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=Vufba_ZcoR0",
        "overview": "The Renaissance (humanism, art, printing press), Protestant Reformation (Martin Luther), Age of Exploration (Columbus, Vasco da Gama), Industrial Revolution in Britain.",
        "keyConcepts": [
          "Renaissance: Rebirth of art, literature, and human reason centered in Italy.",
          "Industrial Revolution: Invention of steam engine, transition from hand labor to mechanized factories."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Italian Renaissance & Humanism"
          },
          {
            "time": "12:00",
            "title": "Reformation & Printing Press"
          },
          {
            "time": "20:30",
            "title": "Steam Power & Factory System"
          }
        ],
        "quizzes": [
          {
            "id": "ss3-q1",
            "question": "Where did the Renaissance cultural movement begin during the 14th century?",
            "options": [
              "Germany",
              "Italy",
              "England",
              "France"
            ],
            "correctIndex": 1,
            "explanation": "The Renaissance originated in Italian city-states like Florence and Venice."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "soc-l4",
        "number": 4,
        "title": "Modern World II",
        "hindiTitle": "आधुनिक विश्व - भाग २",
        "duration": "31 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/lTTvKwCylFY",
        "backupVideoUrl": "https://www.youtube.com/embed/Vufba_ZcoR0",
        "searchEmbedUrl": "https://www.youtube.com/embed/Vufba_ZcoR0",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=lTTvKwCylFY",
        "overview": "American War of Independence (1776), French Revolution (1789: Liberty, Equality, Fraternity), World War I, Russian Revolution (1917), World War II, creation of United Nations.",
        "keyConcepts": [
          "French Revolution: Storming of Bastille (1789), Declaration of Rights of Man.",
          "United Nations: Formed in 1945 to maintain global peace and prevent world conflicts."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "American & French Revolutions"
          },
          {
            "time": "13:40",
            "title": "World War I & Russian Revolution"
          },
          {
            "time": "22:15",
            "title": "World War II & Birth of the UN"
          }
        ],
        "quizzes": [
          {
            "id": "ss4-q1",
            "question": "In which year did the French Revolution break out with the storming of the Bastille?",
            "options": [
              "1776",
              "1789",
              "1815",
              "1848"
            ],
            "correctIndex": 1,
            "explanation": "The French Revolution commenced in July 1789."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "soc-l5",
        "number": 5,
        "title": "Impact of British Rule on India",
        "hindiTitle": "भारत पर ब्रिटिश शासन का प्रभाव",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/alJaltUmrGo",
        "backupVideoUrl": "https://www.youtube.com/embed/nxmWfbXS4Pw",
        "searchEmbedUrl": "https://www.youtube.com/embed/nxmWfbXS4Pw",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=alJaltUmrGo",
        "overview": "East India Company expansion, land revenue settlements (Permanent Settlement, Ryotwari, Mahalwari), commercialization of agriculture, deindustrialization of Indian handicrafts, Drain of Wealth theory.",
        "keyConcepts": [
          "Permanent Settlement: Introduced by Lord Cornwallis (1793) fixing zamindar revenues.",
          "Drain of Wealth: Dadabhai Naoroji highlighted systematic siphoning of Indian resources to Britain."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Colonial Exploitation Overview"
          },
          {
            "time": "11:00",
            "title": "Three Land Revenue Systems"
          },
          {
            "time": "19:20",
            "title": "Decline of Traditional Crafts"
          }
        ],
        "quizzes": [
          {
            "id": "ss5-q1",
            "question": "Who formulated the 'Drain of Wealth' theory exposing British economic exploitation?",
            "options": [
              "Dadabhai Naoroji",
              "Bal Gangadhar Tilak",
              "Mahatma Gandhi",
              "Gopal Krishna Gokhale"
            ],
            "correctIndex": 0,
            "explanation": "Dadabhai Naoroji in his book 'Poverty and Un-British Rule in India'."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "soc-l6",
        "number": 6,
        "title": "Religious and Social Awakening",
        "hindiTitle": "धार्मिक और सामाजिक सुधार आंदोलन",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "backupVideoUrl": "https://www.youtube.com/embed/T_sGTspaF4Y",
        "searchEmbedUrl": "https://www.youtube.com/embed/T_sGTspaF4Y",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=8Nn5uqE3C9w",
        "overview": "19th century socio-religious reform: Raja Ram Mohan Roy (Brahmo Samaj, abolition of Sati), Ishwar Chandra Vidyasagar (widow remarriage), Swami Dayanand Saraswati (Arya Samaj), Jyotirao Phule (anti-caste movement), Swami Vivekananda.",
        "keyConcepts": [
          "Raja Ram Mohan Roy: Father of Modern Indian Renaissance.",
          "Swami Dayanand: 'Go back to the Vedas', founded Arya Samaj (1875)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Need for Social Reform"
          },
          {
            "time": "10:30",
            "title": "Brahmo Samaj & Sati Abolition"
          },
          {
            "time": "19:40",
            "title": "Arya Samaj & Satyashodhak Samaj"
          }
        ],
        "quizzes": [
          {
            "id": "ss6-q1",
            "question": "Which social reformer was primarily responsible for passing the Sati Abolition Act of 1829?",
            "options": [
              "Swami Vivekananda",
              "Raja Ram Mohan Roy",
              "Dayanand Saraswati",
              "B.R. Ambedkar"
            ],
            "correctIndex": 1,
            "explanation": "Raja Ram Mohan Roy tirelessly campaigned until Lord William Bentinck banned Sati in 1829."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "soc-l7",
        "number": 7,
        "title": "Popular Resistance and the Revolt of 1857",
        "hindiTitle": "1857 का विद्रोह",
        "duration": "30 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/nxmWfbXS4Pw",
        "backupVideoUrl": "https://www.youtube.com/embed/alJaltUmrGo",
        "searchEmbedUrl": "https://www.youtube.com/embed/alJaltUmrGo",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=nxmWfbXS4Pw",
        "overview": "Causes of 1857 uprising: political (Doctrine of Lapse), economic dispossession, military grievances (Enfield rifle cartridge), outbreak at Meerut, key leaders (Bahadur Shah Zafar, Rani Lakshmibai, Nana Sahib, Kunwar Singh), end of East India Company rule.",
        "keyConcepts": [
          "Immediate Cause: Greased cartridges rumored to contain beef and pig fat.",
          "Government of India Act 1858: Transferred Indian governance directly to the British Crown (Queen Victoria)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Long-term vs Immediate Causes"
          },
          {
            "time": "12:00",
            "title": "Centres of Revolt & Heroic Leaders"
          },
          {
            "time": "21:30",
            "title": "Queen's Proclamation of 1858"
          }
        ],
        "quizzes": [
          {
            "id": "ss7-q1",
            "question": "Who was proclaimed the symbolic Emperor of India during the 1857 revolt?",
            "options": [
              "Nana Sahib",
              "Bahadur Shah Zafar",
              "Mangal Pandey",
              "Tantia Tope"
            ],
            "correctIndex": 1,
            "explanation": "The sepoys marched to Delhi and declared Mughal Emperor Bahadur Shah Zafar as Shahenshah-e-Hindustan."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "soc-l8",
        "number": 8,
        "title": "Indian National Movement",
        "hindiTitle": "भारतीय राष्ट्रीय आंदोलन",
        "duration": "33 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/T_sGTspaF4Y",
        "backupVideoUrl": "https://www.youtube.com/embed/nxmWfbXS4Pw",
        "searchEmbedUrl": "https://www.youtube.com/embed/nxmWfbXS4Pw",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=T_sGTspaF4Y",
        "overview": "Formation of Indian National Congress (1885), Moderates vs Extremists (Surat Split), Partition of Bengal & Swadeshi movement (1905), Gandhian era (Non-Cooperation, Civil Disobedience, Dandi March, Quit India Movement 1942), Independence & Partition 1947.",
        "keyConcepts": [
          "Satyagraha & Ahimsa: Moral weapons of truth and non-violence championed by Mahatma Gandhi.",
          "Dandi March (1930): 240-mile march to break the British salt tax monopoly."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Early Phase of INC"
          },
          {
            "time": "12:45",
            "title": "Swadeshi & Revolutionary Movement"
          },
          {
            "time": "22:10",
            "title": "Gandhian Mass Movements to 1947"
          }
        ],
        "quizzes": [
          {
            "id": "ss8-q1",
            "question": "In which year was the historic Quit India Movement launched?",
            "options": [
              "1920",
              "1930",
              "1942",
              "1947"
            ],
            "correctIndex": 2,
            "explanation": "Gandhi launched the Quit India Movement in August 1942 with the call 'Do or Die'."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "soc-l9",
        "number": 9,
        "title": "Physiography of India",
        "hindiTitle": "भारत का भौतिक स्वरूप",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/7CPv0NSIG2M",
        "backupVideoUrl": "https://www.youtube.com/embed/xiGhLGFkJjo",
        "searchEmbedUrl": "https://www.youtube.com/embed/xiGhLGFkJjo",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=7CPv0NSIG2M",
        "overview": "Six major physiographic divisions: The Northern Mountains (Himalayas: Himadri, Himachal, Shiwalik), Northern Plains (Alluvial fertile soils), Peninsular Plateau (Malwa, Deccan), Coastal Plains (Western & Eastern), Great Indian Desert (Thar), and Islands (Andaman & Nicobar, Lakshadweep).",
        "keyConcepts": [
          "Himalayas: Young fold mountains acting as climatic and defense barrier.",
          "Alluvial Soils: Deposited by Indus, Ganga, and Brahmaputra river systems."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Geological Formation of India"
          },
          {
            "time": "10:30",
            "title": "The Three Himalayan Ranges"
          },
          {
            "time": "19:15",
            "title": "Plains, Plateaus & Coastal Features"
          }
        ],
        "quizzes": [
          {
            "id": "ss9-q1",
            "question": "Which is the northernmost and highest range of the Himalayas?",
            "options": [
              "Shiwalik",
              "Himadri (Greater Himalayas)",
              "Himachal (Lesser Himalayas)",
              "Purvanchal"
            ],
            "correctIndex": 1,
            "explanation": "Himadri or Greater Himalayas contains the highest perennial snow peaks."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "soc-l10",
        "number": 10,
        "title": "Climate of India",
        "hindiTitle": "भारत की जलवायु",
        "duration": "29 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/xiGhLGFkJjo",
        "backupVideoUrl": "https://www.youtube.com/embed/7CPv0NSIG2M",
        "searchEmbedUrl": "https://www.youtube.com/embed/7CPv0NSIG2M",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=xiGhLGFkJjo",
        "overview": "Tropical monsoon climate, factors influencing climate (latitude, altitude, distance from sea, jet streams, Western Disturbances), seasonal rhythm (Winter, Summer, Advancing Monsoon, Retreating Monsoon).",
        "keyConcepts": [
          "Monsoon Mechanism: Differential heating of land and sea generating moisture-laden winds from Indian Ocean.",
          "Rain Shadow Effect: Western Ghats cause heavy rain on windward side, arid Deccan rain shadow."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Monsoon Dynamics"
          },
          {
            "time": "11:20",
            "title": "Four Seasons of India"
          },
          {
            "time": "20:45",
            "title": "Rainfall Distribution"
          }
        ],
        "quizzes": [
          {
            "id": "ss10-q1",
            "question": "Which place in India receives the highest annual rainfall in the world?",
            "options": [
              "Cherrapunji",
              "Mawsynram",
              "Shimla",
              "Kochi"
            ],
            "correctIndex": 1,
            "explanation": "Mawsynram in Meghalaya receives the highest average annual rainfall on Earth."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  },
  {
    "id": "eng-202",
    "code": "202",
    "name": "English",
    "hindiName": "अंग्रेजी",
    "icon": "📖",
    "color": "#8b5cf6",
    "lessonCountText": "8 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "Short stories, poems, reading comprehension, grammar essentials & functional writing.",
    "lessons": [
      {
        "id": "eng-l1",
        "number": 1,
        "title": "Snake Bite",
        "hindiTitle": "सांप का काटना",
        "duration": "22 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/oK4gRkLw8Z4",
        "backupVideoUrl": "https://www.youtube.com/embed/1_emBREpH4c",
        "searchEmbedUrl": "https://www.youtube.com/embed/1_emBREpH4c",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=oK4gRkLw8Z4",
        "overview": "Raja's childhood tale of getting stung by a bee, mistaken for a poisonous snake bite by his grandparents, taken to an indigenous healer who chants mantras, showing rural superstitions vs reason.",
        "keyConcepts": [
          "Theme: Innocent childhood curiosity and foolishness of unquestioned superstition.",
          "Vocabulary: Curative chanting, alarmed grandparents, harmless garden snake."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Story Reading & Plot Summary"
          },
          {
            "time": "08:30",
            "title": "The Bee Sting Misunderstanding"
          },
          {
            "time": "15:10",
            "title": "Grammar & Comprehension Questions"
          }
        ],
        "quizzes": [
          {
            "id": "e1-q1",
            "question": "What actually bit/stung Raja in the story 'Snake Bite'?",
            "options": [
              "A cobra",
              "A scorpion",
              "A bee",
              "A garden viper"
            ],
            "correctIndex": 2,
            "explanation": "Raja was stung by a bee when he tried to catch it in a coconut shell."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eng-l2",
        "number": 2,
        "title": "How the Squirrel Got His Stripes",
        "hindiTitle": "गिलहरी को धारियां कैसे मिलीं",
        "duration": "20 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/1_emBREpH4c",
        "backupVideoUrl": "https://www.youtube.com/embed/oK4gRkLw8Z4",
        "searchEmbedUrl": "https://www.youtube.com/embed/oK4gRkLw8Z4",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=1_emBREpH4c",
        "overview": "The Ramayana folk fable where monkeys ridicule a tiny squirrel carrying pebbles for the bridge to Lanka. Lord Rama lovingly caresses the squirrel, leaving the three white finger stripes on its back.",
        "keyConcepts": [
          "Moral: No sincere contribution is small or insignificant in a noble cause.",
          "Dignity of devotion and humility."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Building the Bridge to Lanka"
          },
          {
            "time": "08:15",
            "title": "Rama's Blessing & Stripes Origin"
          },
          {
            "time": "14:40",
            "title": "Vocabulary & Reading Comprehension"
          }
        ],
        "quizzes": [
          {
            "id": "e2-q1",
            "question": "What did the squirrel carry to help build the bridge?",
            "options": [
              "Heavy boulders",
              "Small pebbles and sand",
              "Palm logs",
              "Iron nails"
            ],
            "correctIndex": 1,
            "explanation": "The small squirrel contributed by carrying little pebbles and rolling in sand."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eng-l3",
        "number": 3,
        "title": "Kondiba - A Hero",
        "hindiTitle": "कोंडिबा - एक नायक",
        "duration": "24 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/mg410lxnLZE",
        "backupVideoUrl": "https://www.youtube.com/embed/6UC_8Hcfbbg",
        "searchEmbedUrl": "https://www.youtube.com/embed/6UC_8Hcfbbg",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=mg410lxnLZE",
        "overview": "Inspiring true account of Kondiba Gaikwad, a visually impaired beggar in a Mumbai slum who dives repeatedly into a deep murky well to rescue a drowning child, earning honor, rehabilitation, and self-reliance.",
        "keyConcepts": [
          "Courage: Physical disability cannot hinder mental fortitude and valor.",
          "Empowerment over charity."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Life in Golibar Slum"
          },
          {
            "time": "10:00",
            "title": "The Desperate Rescue in the Well"
          },
          {
            "time": "18:00",
            "title": "Recognition and Bottling Academy Award"
          }
        ],
        "quizzes": [
          {
            "id": "e3-q1",
            "question": "What physical disability did Kondiba live with?",
            "options": [
              "Hearing impairment",
              "Speech loss",
              "Blindness",
              "Paralyzed leg"
            ],
            "correctIndex": 2,
            "explanation": "Kondiba had lost his eyesight due to smallpox."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eng-l4",
        "number": 4,
        "title": "Tall Trees",
        "hindiTitle": "लंबे पेड़ (कविता)",
        "duration": "18 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/6UC_8Hcfbbg",
        "backupVideoUrl": "https://www.youtube.com/embed/mg410lxnLZE",
        "searchEmbedUrl": "https://www.youtube.com/embed/mg410lxnLZE",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=6UC_8Hcfbbg",
        "overview": "Eileen Mathias' tender nature poem describing tall trees with their feet in the earth, heads in the sky, watching clouds and sheltering resting birds with a gentle evening lullaby.",
        "keyConcepts": [
          "Poetic Devices: Personification of trees as loving, protective guardians.",
          "Imagery: Cloud gazing, nest cradling, moon watching."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Poem Recitation & Rhythm"
          },
          {
            "time": "07:30",
            "title": "Stanza-by-Stanza Analysis"
          },
          {
            "time": "13:00",
            "title": "Rhyme Scheme & Figures of Speech"
          }
        ],
        "quizzes": [
          {
            "id": "e4-q1",
            "question": "Who wrote the poem 'Tall Trees'?",
            "options": [
              "Robert Frost",
              "Eileen Mathias",
              "Ruskin Bond",
              "Sarojini Naidu"
            ],
            "correctIndex": 1,
            "explanation": "'Tall Trees' is written by Eileen Mathias."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eng-l5",
        "number": 5,
        "title": "A Tiger in the Tunnel",
        "hindiTitle": "सुरंग में बाघ",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/oK4gRkLw8Z4",
        "backupVideoUrl": "https://www.youtube.com/embed/1_emBREpH4c",
        "searchEmbedUrl": "https://www.youtube.com/embed/1_emBREpH4c",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=oK4gRkLw8Z4",
        "overview": "Ruskin Bond's gripping story of Baldeo, the night watchman at an isolated jungle railway station who defends his post against a man-eating tiger with his axe, and his brave young son Tembu who steps into his father's shoes.",
        "keyConcepts": [
          "Themes: Devotion to duty, father-son bond, courage in the face of wilderness dangers.",
          "Setting: Remote jungle cutting along a railway tunnel."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "The Night Duty at the Cutting"
          },
          {
            "time": "10:30",
            "title": "Baldeo's Fight with the Tiger"
          },
          {
            "time": "19:00",
            "title": "Tembu Inherits the Lantern and Axe"
          }
        ],
        "quizzes": [
          {
            "id": "e5-q1",
            "question": "What weapon did Baldeo carry on his night patrol?",
            "options": [
              "A rifle",
              "A small sharp axe",
              "A spear",
              "A bow and arrow"
            ],
            "correctIndex": 1,
            "explanation": "Baldeo possessed a small axe fashioned by his village blacksmith."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eng-l6",
        "number": 6,
        "title": "The Best Investment I Ever Made",
        "hindiTitle": "मेरा सर्वश्रेष्ठ निवेश",
        "duration": "24 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/mg410lxnLZE",
        "backupVideoUrl": "https://www.youtube.com/embed/6UC_8Hcfbbg",
        "searchEmbedUrl": "https://www.youtube.com/embed/6UC_8Hcfbbg",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=mg410lxnLZE",
        "overview": "A.J. Cronin recounts how as a young physician, he saved a suicidal young man who had stolen money from his employer, giving him seven pounds to repay the debt. Decades later on an ocean liner, the man introduces himself as a leading youth rehabilitation social worker.",
        "keyConcepts": [
          "Theme: Compassion and a timely second chance yield immeasurable human dividends.",
          "True wealth is measured in transformed human lives."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "The Encounter on the Ocean Liner"
          },
          {
            "time": "10:00",
            "title": "Flashback: The London Emergency Rescue"
          },
          {
            "time": "17:30",
            "title": "The Greatest Return on Investment"
          }
        ],
        "quizzes": [
          {
            "id": "e6-q1",
            "question": "What sum of money did Dr. Cronin give the desperate young man to restore the stolen funds?",
            "options": [
              "100 pounds",
              "7 pounds 10 shillings",
              "50 pounds",
              "20 pounds"
            ],
            "correctIndex": 1,
            "explanation": "Cronin gave him just over seven pounds, saving him from prosecution and despair."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eng-l7",
        "number": 7,
        "title": "The Shoeshine",
        "hindiTitle": "शूशाइन (जूता चमकाने वाला)",
        "duration": "23 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/1_emBREpH4c",
        "backupVideoUrl": "https://www.youtube.com/embed/oK4gRkLw8Z4",
        "searchEmbedUrl": "https://www.youtube.com/embed/oK4gRkLw8Z4",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=1_emBREpH4c",
        "overview": "An educated unemployed youth in Connaught Place meets Shovan Lal, leader of the Shoeshine Boys Union. The youth learns that manual labor done with honesty and dignity among organized peers is far more honorable than idling or begging.",
        "keyConcepts": [
          "Dignity of Labour: No honest work is demeaning.",
          "Solidarity and trade union fellowship among street workers."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "The Plight of Educated Unemployment"
          },
          {
            "time": "09:30",
            "title": "Meeting Shovan Lal in Connaught Place"
          },
          {
            "time": "17:00",
            "title": "Union Admission and Self-Reliance"
          }
        ],
        "quizzes": [
          {
            "id": "e7-q1",
            "question": "Where does the story 'The Shoeshine' take place?",
            "options": [
              "Mumbai Marine Drive",
              "Connaught Place, New Delhi",
              "Kolkata Park Street",
              "Chennai Marina"
            ],
            "correctIndex": 1,
            "explanation": "The young graduate seeks work in Connaught Place, New Delhi."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eng-l8",
        "number": 8,
        "title": "A Birthday Letter",
        "hindiTitle": "जन्मदिन पर पत्र",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/6UC_8Hcfbbg",
        "backupVideoUrl": "https://www.youtube.com/embed/mg410lxnLZE",
        "searchEmbedUrl": "https://www.youtube.com/embed/mg410lxnLZE",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=6UC_8Hcfbbg",
        "overview": "Pandit Jawaharlal Nehru's letter from Central Prison, Naini in 1930 to his 13-year-old daughter Indira on her birthday. Instead of material gifts, he imparts wisdom on courage, truthfulness, and participating with reverence in India's struggle for independence.",
        "keyConcepts": [
          "Moral Leadership: 'Never do anything in secret or wish to hide anything.'",
          "Living openly with fearlessness under Gandhi's guidance."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Context of Naini Prison (1930)"
          },
          {
            "time": "10:30",
            "title": "Nehru's Advice on Truth & Courage"
          },
          {
            "time": "19:00",
            "title": "Becoming a Soldier in India's Freedom"
          }
        ],
        "quizzes": [
          {
            "id": "e8-q1",
            "question": "From which prison did Jawaharlal Nehru write this birthday letter to Indira?",
            "options": [
              "Yerwada Jail",
              "Cellular Jail",
              "Naini Central Prison",
              "Tihar Jail"
            ],
            "correctIndex": 2,
            "explanation": "Nehru penned the letter while imprisoned at Central Prison, Naini in 1930."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  },
  {
    "id": "eco-214",
    "code": "214",
    "name": "Economics",
    "hindiName": "अर्थशास्त्र",
    "icon": "📊",
    "color": "#ec4899",
    "lessonCountText": "8 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "Basic economic concepts, production, consumption, markets & Indian economic development.",
    "lessons": [
      {
        "id": "eco-l1",
        "number": 1,
        "title": "What is Economics",
        "hindiTitle": "अर्थशास्त्र क्या है",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/3ez10ADR_gM",
        "backupVideoUrl": "https://www.youtube.com/embed/NI9TLDIPVcs",
        "searchEmbedUrl": "https://www.youtube.com/embed/NI9TLDIPVcs",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=3ez10ADR_gM",
        "overview": "Definitions of economics (Adam Smith, Alfred Marshall, Lionel Robbins), scarcity of resources vs unlimited human wants, economic vs non-economic activities.",
        "keyConcepts": [
          "Scarcity Principle: Resources have alternative uses.",
          "Economic Activity: Done for income generation."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Origins of Economics"
          },
          {
            "time": "10:00",
            "title": "Wealth vs Scarcity Definitions"
          },
          {
            "time": "18:00",
            "title": "Economic Activities"
          }
        ],
        "quizzes": [
          {
            "id": "ec1-q1",
            "question": "Who published 'The Wealth of Nations' in 1776 and is regarded as the Father of Economics?",
            "options": [
              "Adam Smith",
              "Alfred Marshall",
              "Lionel Robbins",
              "J.M. Keynes"
            ],
            "correctIndex": 0,
            "explanation": "Adam Smith is the Father of Modern Economics."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eco-l2",
        "number": 2,
        "title": "Basic Economic Activities",
        "hindiTitle": "मूलभूत आर्थिक क्रियाएँ",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/NI9TLDIPVcs",
        "backupVideoUrl": "https://www.youtube.com/embed/3ez10ADR_gM",
        "searchEmbedUrl": "https://www.youtube.com/embed/3ez10ADR_gM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=NI9TLDIPVcs",
        "overview": "Production, consumption, capital formation (investment), exchange, and their interdependence in the circular flow of national income.",
        "keyConcepts": [
          "Production: Creation of utility.",
          "Consumption: Direct satisfaction of wants.",
          "Capital Formation: Increase in capital assets."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Four Economic Pillars"
          },
          {
            "time": "12:00",
            "title": "Circular Flow Model"
          }
        ],
        "quizzes": [
          {
            "id": "ec2-q1",
            "question": "The process of adding utility to goods and services is called:",
            "options": [
              "Consumption",
              "Production",
              "Exchange",
              "Hoarding"
            ],
            "correctIndex": 1,
            "explanation": "Production is the creation of utility."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eco-l3",
        "number": 3,
        "title": "Economic Systems",
        "hindiTitle": "आर्थिक प्रणालियाँ",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/B43YEW2FvDs",
        "backupVideoUrl": "https://www.youtube.com/embed/d8uTB5XorBw",
        "searchEmbedUrl": "https://www.youtube.com/embed/d8uTB5XorBw",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=B43YEW2FvDs",
        "overview": "Comparison of Capitalism (market economy), Socialism (planned economy), and Mixed Economy (the Indian economic model).",
        "keyConcepts": [
          "Mixed Economy: Coexistence of public sector and private enterprise.",
          "Planning Commission and NITI Aayog."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Capitalism vs Socialism"
          },
          {
            "time": "14:00",
            "title": "The Indian Mixed Economy"
          }
        ],
        "quizzes": [
          {
            "id": "ec3-q1",
            "question": "Which economic system is practiced in India?",
            "options": [
              "Pure Capitalist",
              "Pure Socialist",
              "Mixed Economy",
              "Feudalism"
            ],
            "correctIndex": 2,
            "explanation": "India follows a mixed economy combining public and private sectors."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eco-l4",
        "number": 4,
        "title": "Factors of Production",
        "hindiTitle": "उत्पाद के कारक",
        "duration": "29 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/UHiUYj5EA0w",
        "backupVideoUrl": "https://www.youtube.com/embed/B43YEW2FvDs",
        "searchEmbedUrl": "https://www.youtube.com/embed/B43YEW2FvDs",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=UHiUYj5EA0w",
        "overview": "Land, Labor, Capital, and Entrepreneurship with their corresponding factor rewards: Rent, Wages, Interest, and Profit.",
        "keyConcepts": [
          "Land -> Rent | Labor -> Wages | Capital -> Interest | Entrepreneur -> Profit."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "The 4 Production Factors"
          },
          {
            "time": "15:00",
            "title": "Factor Rewards & Distribution"
          }
        ],
        "quizzes": [
          {
            "id": "ec4-q1",
            "question": "What is the factor reward earned by Capital?",
            "options": [
              "Rent",
              "Wages",
              "Interest",
              "Profit"
            ],
            "correctIndex": 2,
            "explanation": "Capital earns interest as its economic reward."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eco-l5",
        "number": 5,
        "title": "Agriculture in India",
        "hindiTitle": "भारत में कृषि",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/Yocja_N5s1I",
        "backupVideoUrl": "https://www.youtube.com/embed/zhL5DCizj5c",
        "searchEmbedUrl": "https://www.youtube.com/embed/zhL5DCizj5c",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=Yocja_N5s1I",
        "overview": "Role of agriculture in Indian economy, Green Revolution, food security, Public Distribution System (PDS), and agricultural credit.",
        "keyConcepts": [
          "Green Revolution: High Yielding Varieties (HYV) of seeds, irrigation, and chemical fertilizers.",
          "MSP: Minimum Support Price declared by government."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Agricultural Backbone of India"
          },
          {
            "time": "12:00",
            "title": "Green Revolution Impacts"
          },
          {
            "time": "20:00",
            "title": "Food Security & PDS"
          }
        ],
        "quizzes": [
          {
            "id": "ec5-q1",
            "question": "The introduction of HYV seeds in Indian agriculture is famously known as:",
            "options": [
              "White Revolution",
              "Green Revolution",
              "Blue Revolution",
              "Yellow Revolution"
            ],
            "correctIndex": 1,
            "explanation": "The Green Revolution revolutionized food grain production in India."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eco-l6",
        "number": 6,
        "title": "Industry and Services Sector",
        "hindiTitle": "उद्योग और सेवा क्षेत्र",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/zhL5DCizj5c",
        "backupVideoUrl": "https://www.youtube.com/embed/UHiUYj5EA0w",
        "searchEmbedUrl": "https://www.youtube.com/embed/UHiUYj5EA0w",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=zhL5DCizj5c",
        "overview": "Classification of industries (cottage, small-scale, large-scale), New Economic Policy 1991 (LPG: Liberalization, Privatization, Globalization), service sector boom (IT, telecom, banking).",
        "keyConcepts": [
          "LPG Reforms 1991: Liberalization, Privatization, and Globalization.",
          "Tertiary Sector: Fastest growing contributor to Indian GDP."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Secondary vs Tertiary Sectors"
          },
          {
            "time": "12:30",
            "title": "1991 Economic Reforms (LPG)"
          },
          {
            "time": "20:00",
            "title": "IT & Services Growth"
          }
        ],
        "quizzes": [
          {
            "id": "ec6-q1",
            "question": "What does 'LPG' stand for in the context of the 1991 Indian economic reforms?",
            "options": [
              "Liquified Petroleum Gas",
              "Liberalization, Privatization, Globalization",
              "Local Production Growth",
              "Legal Public Governance"
            ],
            "correctIndex": 1,
            "explanation": "LPG stands for Liberalization, Privatization, and Globalization."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eco-l7",
        "number": 7,
        "title": "Money and Banking",
        "hindiTitle": "मुद्रा और बैंकिंग",
        "duration": "29 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/Dugn51K_6WA",
        "backupVideoUrl": "https://www.youtube.com/embed/d8uTB5XorBw",
        "searchEmbedUrl": "https://www.youtube.com/embed/d8uTB5XorBw",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=Dugn51K_6WA",
        "overview": "Barter system drawbacks (double coincidence of wants), functions of money, commercial banks (credit creation), Reserve Bank of India (RBI: central bank functions, monetary policy).",
        "keyConcepts": [
          "Functions of Money: Medium of exchange, unit of account, store of value, standard of deferred payment.",
          "RBI: Banker to the government, currency issuer, controller of credit."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Evolution of Money from Barter"
          },
          {
            "time": "13:00",
            "title": "Commercial Banking Functions"
          },
          {
            "time": "21:00",
            "title": "Role of Reserve Bank of India"
          }
        ],
        "quizzes": [
          {
            "id": "ec7-q1",
            "question": "Which institution acts as the apex central bank of India?",
            "options": [
              "State Bank of India",
              "Reserve Bank of India",
              "Punjab National Bank",
              "Ministry of Finance"
            ],
            "correctIndex": 1,
            "explanation": "The Reserve Bank of India (RBI) is the central banking institution."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "eco-l8",
        "number": 8,
        "title": "National Income and Economic Growth",
        "hindiTitle": "राष्ट्रीय आय और आर्थिक विकास",
        "duration": "30 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/d8uTB5XorBw",
        "backupVideoUrl": "https://www.youtube.com/embed/Dugn51K_6WA",
        "searchEmbedUrl": "https://www.youtube.com/embed/Dugn51K_6WA",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=d8uTB5XorBw",
        "overview": "Concepts of Gross Domestic Product (GDP), Gross National Product (GNP), per capita income, Human Development Index (HDI), economic growth vs economic development, sustainable development.",
        "keyConcepts": [
          "GDP: Total money value of final goods and services produced within domestic territory in a year.",
          "HDI: Measures health (life expectancy), education, and standard of living."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "GDP & National Income Metrics"
          },
          {
            "time": "12:30",
            "title": "Growth vs Human Development"
          },
          {
            "time": "22:00",
            "title": "Sustainable Development Goals"
          }
        ],
        "quizzes": [
          {
            "id": "ec8-q1",
            "question": "What is calculated by dividing total National Income by the total population?",
            "options": [
              "Gross Domestic Product",
              "Per Capita Income",
              "Net Factor Income",
              "Inflation Index"
            ],
            "correctIndex": 1,
            "explanation": "Per Capita Income = Total National Income / Total Population."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  },
  {
    "id": "hin-201",
    "code": "201",
    "name": "Hindi",
    "hindiName": "हिन्दी",
    "icon": "📜",
    "color": "#e11d48",
    "lessonCountText": "8 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "हिंदी साहित्य, कविता, गद्य, व्याकरण एवं व्यावहारिक भाषा ज्ञान।",
    "lessons": [
      {
        "id": "hin-l1",
        "number": 1,
        "title": "रैदास के पद",
        "hindiTitle": "रैदास के पद",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "backupVideoUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "searchEmbedUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=qqxx6miHAJY",
        "overview": "संत रैदास की अनन्य भक्ति भावना: 'प्रभु जी तुम चंदन हम पानी, जाकी अंग-अंग बास समानी।' निर्गुण भक्ति, समर्पण एवं जाति-पांति के बंधनों से मुक्ति।",
        "keyConcepts": [
          "भक्ति काल की निर्गुण काव्य धारा।",
          "समर्पण एवं ईश्वर की सर्वव्यापकता का भाव।"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "संत रैदास का परिचय"
          },
          {
            "time": "11:00",
            "title": "पदों का सरल भावार्थ"
          }
        ],
        "quizzes": [
          {
            "id": "h1-q1",
            "question": "रैदास ने प्रभु को चंदन मानकर स्वयं को क्या कहा है?",
            "options": [
              "पानी",
              "मोती",
              "धागा",
              "दीपक"
            ],
            "correctIndex": 0,
            "explanation": "'प्रभु जी तुम चंदन हम पानी।'"
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hin-l2",
        "number": 2,
        "title": "दोहे (कबीरदास)",
        "hindiTitle": "कबीर के दोहे",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "backupVideoUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "searchEmbedUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=qqxx6miHAJY",
        "overview": "कबीर के नीतिपरक एवं सामाजिक चेतना जागृत करने वाले दोहे: गुरु महिमा, अहंकार का त्याग और सत्य का महत्व।",
        "keyConcepts": [
          "सधुक्कड़ी भाषा का प्रयोग।",
          "आडंबरों का विरोध एवं आत्मज्ञान की महत्ता।"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "कबीरदास का जीवन परिचय"
          },
          {
            "time": "12:00",
            "title": "नीतिपरक दोहों का अर्थ"
          }
        ],
        "quizzes": [
          {
            "id": "h2-q1",
            "question": "कबीरदास जी के अनुसार गुरु की महिमा किससे भी बड़ी है?",
            "options": [
              "मित्र",
              "गोविंद (ईश्वर)",
              "राजा",
              "संसार"
            ],
            "correctIndex": 1,
            "explanation": "'गुरु गोविंद दोऊ खड़े काके लागूं पांय।'"
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hin-l3",
        "number": 3,
        "title": "गिल्लू (महादेवी वर्मा)",
        "hindiTitle": "गिल्लू - रेखाचित्र",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "backupVideoUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "searchEmbedUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=KlO2jLV5hr8",
        "overview": "महादेवी वर्मा द्वारा रचित गिलहरी के बच्चे गिल्लू का मर्मस्पर्शी संस्मरण एवं मानवेतर जीवों के प्रति अगाध प्रेम।",
        "keyConcepts": [
          "संस्मरण विधा की विशेषताएं।",
          "पशु-पक्षियों के प्रति मानवीय संवेदना और करुणा।"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "कहानी का सारांश"
          },
          {
            "time": "13:00",
            "title": "पात्र चित्रण एवं मानवीय पक्ष"
          }
        ],
        "quizzes": [
          {
            "id": "h3-q1",
            "question": "'गिल्लू' संस्मरण की लेखिका कौन हैं?",
            "options": [
              "सुभद्रा कुमारी चौहान",
              "महादेवी वर्मा",
              "कृष्णा सोबती",
              "मन्नू भंडारी"
            ],
            "correctIndex": 1,
            "explanation": "यह प्रसिद्ध संस्मरण महादेवी वर्मा का है।"
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hin-l4",
        "number": 4,
        "title": "आह्वान (मैथिलीशरण गुप्त)",
        "hindiTitle": "आह्वान - राष्ट्रीय चेतना",
        "duration": "24 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "backupVideoUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "searchEmbedUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=qqxx6miHAJY",
        "overview": "राष्ट्रकवि मैथिलीशरण गुप्त की राष्ट्रीय भावना से ओतप्रोत कविता: कर्मण्यता, आलस्य का त्याग और राष्ट्र निर्माण का संदेश।",
        "keyConcepts": [
          "राष्ट्रकवि मैथिलीशरण गुप्त का परिचय।",
          "देशवासियों को पराधीनता और जड़ता त्यागने का आह्वान।"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "कविता का सस्वर पाठ"
          },
          {
            "time": "11:00",
            "title": "राष्ट्रीय संदेश एवं व्याख्या"
          }
        ],
        "quizzes": [
          {
            "id": "h4-q1",
            "question": "'आह्वान' कविता के रचयिता कौन हैं?",
            "options": [
              "जयशंकर प्रसाद",
              "मैथिलीशरण गुप्त",
              "सूर्यकांत त्रिपाठी निराला",
              "दिनकर"
            ],
            "correctIndex": 1,
            "explanation": "यह रचना राष्ट्रकवि मैथिलीशरण गुप्त की है।"
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hin-l5",
        "number": 5,
        "title": "अपना पराया",
        "hindiTitle": "अपना पराया - सामाजिक निबंध",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "backupVideoUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "searchEmbedUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=KlO2jLV5hr8",
        "overview": "मनुष्य की संकीर्ण मानसिकता को त्यागकर वसुधैव कुटुम्बकम् की भावना अपनाने का प्रेरणादायक पाठ।",
        "keyConcepts": [
          "संकीर्णता का त्याग और सार्वभौमिक बंधुत्व।",
          "सच्चे परोपकार की महत्ता।"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "पाठ परिचय"
          },
          {
            "time": "12:00",
            "title": "सामाजिक दृष्टिकोण"
          }
        ],
        "quizzes": [
          {
            "id": "h5-q1",
            "question": "'वसुधैव कुटुम्बकम्' का क्या अर्थ है?",
            "options": [
              "मेरा परिवार ही सब कुछ है",
              "पूरी पृथ्वी ही एक परिवार है",
              "पड़ोसी अपना है",
              "धन ही सर्वोपरि है"
            ],
            "correctIndex": 1,
            "explanation": "'वसुधैव कुटुम्बकम्' का अर्थ है संपूर्ण पृथ्वी एक परिवार है।"
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hin-l6",
        "number": 6,
        "title": "झांसी की रानी (सुभद्रा कुमारी चौहान)",
        "hindiTitle": "झांसी की रानी",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "backupVideoUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "searchEmbedUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=KlO2jLV5hr8",
        "overview": "वीर रस की अमर गाथा: 'बुंदेले हरबोलों के मुँह हमने सुनी कहानी थी, खूब लड़ी मर्दानी वह तो झाँसी वाली रानी थी।' रानी लक्ष्मीबाई का अदम्य शौर्य।",
        "keyConcepts": [
          "वीर रस के स्थायी भाव 'उत्साह' का निरूपण।",
          "1857 के प्रथम स्वतंत्रता संग्राम में रानी लक्ष्मीबाई की वीरता।"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "कविता का ओजस्वी पाठ"
          },
          {
            "time": "13:00",
            "title": "ऐतिहासिक संदर्भ और व्याख्या"
          }
        ],
        "quizzes": [
          {
            "id": "h6-q1",
            "question": "'खूब लड़ी मर्दानी वह तो झाँसी वाली रानी थी' कविता की रचना किसने की?",
            "options": [
              "महादेवी वर्मा",
              "सुभद्रा कुमारी चौहान",
              "सरोजिनी नायडू",
              "मन्नू भंडारी"
            ],
            "correctIndex": 1,
            "explanation": "यह अमर रचना सुभद्रा कुमारी चौहान की है।"
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hin-l7",
        "number": 7,
        "title": "चंद्रगहना से लौटती बेर",
        "hindiTitle": "चंद्रगहना से लौटती बेर",
        "duration": "24 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "backupVideoUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "searchEmbedUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=qqxx6miHAJY",
        "overview": "केदारनाथ अग्रवाल की प्रकृति-चित्रण प्रधान कविता। ग्रामीण परिवेश, चने और अलसी के पौधों का मानवीकरण और प्राकृतिक सौंदर्य।",
        "keyConcepts": [
          "प्रकृति का सजीव मानवीकरण अलंकार।",
          "ग्रामीण भारत की सादगी और प्राकृतिक छटा।"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "कविता का सारांश"
          },
          {
            "time": "11:30",
            "title": "अलंकार और काव्य सौंदर्य"
          }
        ],
        "quizzes": [
          {
            "id": "h7-q1",
            "question": "इस कविता में कवि खेत की मेड़ पर बैठकर किस पौधे के सिर पर मुरैठा (पगड़ी) देखता है?",
            "options": [
              "गेहूं",
              "चना (एक बित्ते का)",
              "सरसों",
              "मटर"
            ],
            "correctIndex": 1,
            "explanation": "कवि ने छोटे चने के पौधे का मानवीकरण दूल्हे के रूप में किया है।"
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hin-l8",
        "number": 8,
        "title": "व्यावहारिक व्याकरण एवं पत्र लेखन",
        "hindiTitle": "व्याकरण एवं पत्र लेखन",
        "duration": "30 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/KlO2jLV5hr8",
        "backupVideoUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "searchEmbedUrl": "https://www.youtube.com/embed/qqxx6miHAJY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=KlO2jLV5hr8",
        "overview": "संधि, समास, उपसर्ग, प्रत्यय, वाक्य भेद, मुहावरे, लोकोक्तियाँ, तथा औपचारिक एवं अनौपचारिक पत्र लेखन की विधियाँ।",
        "keyConcepts": [
          "संधि और समास के नियम।",
          "कार्यालयी एवं व्यक्तिगत पत्र लेखन का प्रारूप।"
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "संधि व समास नियम"
          },
          {
            "time": "14:00",
            "title": "मुहावरे एवं वाक्य शुद्धिकरण"
          },
          {
            "time": "22:00",
            "title": "पत्र लेखन का सटीक प्रारूप"
          }
        ],
        "quizzes": [
          {
            "id": "h8-q1",
            "question": "'विद्यालय' में कौन सी संधि है?",
            "options": [
              "गुण संधि",
              "दीर्घ स्वर संधि",
              "वृद्धि संधि",
              "व्यंजन संधि"
            ],
            "correctIndex": 1,
            "explanation": "विद्या + आलय = विद्यालय (अ/आ + अ/आ = आ, दीर्घ संधि)।"
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  },
  {
    "id": "deo-229",
    "code": "229",
    "name": "Data Entry Operations",
    "hindiName": "डाटा एंट्री ऑपरेशंस",
    "icon": "💻",
    "color": "#06b6d4",
    "lessonCountText": "8 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "Basics of computers, Windows operating system, word processing, spreadsheets and presentation software.",
    "lessons": [
      {
        "id": "deo-l1",
        "number": 1,
        "title": "Basics of Computer",
        "hindiTitle": "कंप्यूटर के मूल सिद्धांत",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/O5nskjZ_GoI",
        "backupVideoUrl": "https://www.youtube.com/embed/26QPDBe-NB8",
        "searchEmbedUrl": "https://www.youtube.com/embed/26QPDBe-NB8",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=O5nskjZ_GoI",
        "overview": "Input/output devices, CPU architecture (ALU, CU, Registers), memory hierarchy (RAM, ROM, Cache), secondary storage devices.",
        "keyConcepts": [
          "Hardware vs Software: System software (OS) vs Application software.",
          "Memory: RAM is volatile; ROM is non-volatile holding BIOS."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Computer Components & I/O"
          },
          {
            "time": "12:00",
            "title": "CPU & Memory Units"
          }
        ],
        "quizzes": [
          {
            "id": "deo1-q1",
            "question": "Which of the following computer memories is volatile (loses data on power off)?",
            "options": [
              "ROM",
              "RAM",
              "Hard Disk",
              "Flash Drive"
            ],
            "correctIndex": 1,
            "explanation": "RAM (Random Access Memory) is volatile."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "deo-l2",
        "number": 2,
        "title": "Operating System Basics",
        "hindiTitle": "ऑपरेटिंग सिस्टम",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/26QPDBe-NB8",
        "backupVideoUrl": "https://www.youtube.com/embed/O5nskjZ_GoI",
        "searchEmbedUrl": "https://www.youtube.com/embed/O5nskjZ_GoI",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=26QPDBe-NB8",
        "overview": "Functions of Operating Systems (Windows, Linux), GUI desktop elements, file management, folders, shortcuts, and Control Panel settings.",
        "keyConcepts": [
          "OS Role: Manages hardware resources and provides user interface.",
          "File System: Hierarchical structure of folders, paths, extensions."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Role of OS"
          },
          {
            "time": "12:00",
            "title": "Desktop & File Explorer"
          }
        ],
        "quizzes": [
          {
            "id": "deo2-q1",
            "question": "What is the primary role of an Operating System?",
            "options": [
              "To browse websites",
              "To manage computer hardware & software resources",
              "To compile C++ code",
              "To design images"
            ],
            "correctIndex": 1,
            "explanation": "An OS acts as the resource manager and interface between user and hardware."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "deo-l3",
        "number": 3,
        "title": "Word Processing Basics",
        "hindiTitle": "वर्ड प्रोसेसिंग के मूल तत्व",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/Cw6a3b5QoAs",
        "backupVideoUrl": "https://www.youtube.com/embed/yj_s3cdfVDY",
        "searchEmbedUrl": "https://www.youtube.com/embed/yj_s3cdfVDY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=Cw6a3b5QoAs",
        "overview": "Introduction to MS Word / Writer, creating, saving, and opening documents, cursor navigation, text editing, spell check and grammar tool.",
        "keyConcepts": [
          "Keyboard Shortcuts: Ctrl+S (Save), Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+Z (Undo).",
          "Word Environment: Ribbon, Quick Access Toolbar, Status Bar."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Word Interface Tour"
          },
          {
            "time": "11:00",
            "title": "Creating & Saving Documents"
          },
          {
            "time": "18:00",
            "title": "Editing & Spell Check"
          }
        ],
        "quizzes": [
          {
            "id": "deo3-q1",
            "question": "What is the standard shortcut to Save a document?",
            "options": [
              "Ctrl + O",
              "Ctrl + S",
              "Ctrl + P",
              "Ctrl + N"
            ],
            "correctIndex": 1,
            "explanation": "Ctrl + S saves the current document."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "deo-l4",
        "number": 4,
        "title": "Formatting Documents",
        "hindiTitle": "दस्तावेज़ प्रारूपण",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/Cw6a3b5QoAs",
        "backupVideoUrl": "https://www.youtube.com/embed/yj_s3cdfVDY",
        "searchEmbedUrl": "https://www.youtube.com/embed/yj_s3cdfVDY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=Cw6a3b5QoAs",
        "overview": "Font formatting (size, color, bold, italics), paragraph formatting (alignments: left, right, center, justify), line spacing, bulleted and numbered lists, borders and shading.",
        "keyConcepts": [
          "Text Alignment: Left (Ctrl+L), Center (Ctrl+E), Right (Ctrl+R), Justify (Ctrl+J).",
          "Indentation and tab stops."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Character Formatting"
          },
          {
            "time": "13:00",
            "title": "Paragraph Alignments & Indents"
          },
          {
            "time": "21:00",
            "title": "Bullets, Numbering & Borders"
          }
        ],
        "quizzes": [
          {
            "id": "deo4-q1",
            "question": "Which alignment aligns text evenly along both the left and right margins?",
            "options": [
              "Left",
              "Center",
              "Right",
              "Justify"
            ],
            "correctIndex": 3,
            "explanation": "Justify distributes text evenly between margins."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "deo-l5",
        "number": 5,
        "title": "Mail Merge",
        "hindiTitle": "मेल मर्ज",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/yj_s3cdfVDY",
        "backupVideoUrl": "https://www.youtube.com/embed/Cw6a3b5QoAs",
        "searchEmbedUrl": "https://www.youtube.com/embed/Cw6a3b5QoAs",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=yj_s3cdfVDY",
        "overview": "Concept of Mail Merge, main document, data source (recipients list), merge fields, previewing merged documents, and printing personalized letters and envelopes.",
        "keyConcepts": [
          "Mail Merge Components: Main Document + Data Source -> Merged Documents.",
          "Applications: Mass invitations, certificates, exam hall tickets."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "What is Mail Merge?"
          },
          {
            "time": "10:30",
            "title": "Creating Data Source"
          },
          {
            "time": "18:40",
            "title": "Inserting Fields & Completing Merge"
          }
        ],
        "quizzes": [
          {
            "id": "deo5-q1",
            "question": "In Mail Merge, the file containing recipients' names and addresses is called the:",
            "options": [
              "Main Document",
              "Data Source",
              "Merged Document",
              "Macro"
            ],
            "correctIndex": 1,
            "explanation": "The Data Source contains the individual record entries."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "deo-l6",
        "number": 6,
        "title": "Basics of Spreadsheets",
        "hindiTitle": "स्प्रेडशीट के मूल तत्व",
        "duration": "29 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/xIynD1gFOLo",
        "backupVideoUrl": "https://www.youtube.com/embed/Y8xhrUa3KH4",
        "searchEmbedUrl": "https://www.youtube.com/embed/Y8xhrUa3KH4",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=xIynD1gFOLo",
        "overview": "Workbook vs worksheet, row numbers, column letters, cell address (e.g. B4), entering numbers, text, dates, navigating large worksheets, auto-fill handle.",
        "keyConcepts": [
          "Cell Address: Intersection of column letter and row number.",
          "Auto-Fill Handle: Rapidly populates sequences (days, months, numbers)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Spreadsheet Grid Anatomy"
          },
          {
            "time": "12:00",
            "title": "Data Entry & Types"
          },
          {
            "time": "20:00",
            "title": "AutoFill & Navigation"
          }
        ],
        "quizzes": [
          {
            "id": "deo6-q1",
            "question": "What is the cell address of the cell at column C and row 5?",
            "options": [
              "5C",
              "C5",
              "C:5",
              "=C5"
            ],
            "correctIndex": 1,
            "explanation": "Cell addresses are written as Column Letter followed by Row Number: C5."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "deo-l7",
        "number": 7,
        "title": "Formatting Worksheets",
        "hindiTitle": "वर्कशीट प्रारूपण",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/xIynD1gFOLo",
        "backupVideoUrl": "https://www.youtube.com/embed/Y8xhrUa3KH4",
        "searchEmbedUrl": "https://www.youtube.com/embed/Y8xhrUa3KH4",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=xIynD1gFOLo",
        "overview": "Changing row height and column width, merge & center cells, number formatting (currency, percentage, decimal places), cell borders and fill colors, wrap text.",
        "keyConcepts": [
          "Merge & Center: Combines selected cells into one and centers content.",
          "Number Styles: Currency, Accounting, Percentage (%)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Row/Column Adjustments"
          },
          {
            "time": "11:00",
            "title": "Number Formatting"
          },
          {
            "time": "19:00",
            "title": "Merge & Center and Wrap Text"
          }
        ],
        "quizzes": [
          {
            "id": "deo7-q1",
            "question": "Which command combines multiple adjacent cells into a single larger cell?",
            "options": [
              "Wrap Text",
              "Merge & Center",
              "Split Cells",
              "AutoFit"
            ],
            "correctIndex": 1,
            "explanation": "'Merge & Center' unites selected cells into one."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "deo-l8",
        "number": 8,
        "title": "Formulas and Functions",
        "hindiTitle": "सूत्र और फलन",
        "duration": "32 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/Y8xhrUa3KH4",
        "backupVideoUrl": "https://www.youtube.com/embed/xIynD1gFOLo",
        "searchEmbedUrl": "https://www.youtube.com/embed/xIynD1gFOLo",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=Y8xhrUa3KH4",
        "overview": "Entering formulas starting with '=', mathematical operators (+, -, *, /), built-in functions: SUM(), AVERAGE(), MAX(), MIN(), COUNT(), relative vs absolute cell referencing ($A$1).",
        "keyConcepts": [
          "Formulas always start with '=' sign.",
          "Absolute Referencing: Uses '$' sign to lock row or column ($A$1)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Formulas vs Functions"
          },
          {
            "time": "13:00",
            "title": "Common Functions: SUM, AVERAGE, MAX"
          },
          {
            "time": "22:00",
            "title": "Relative vs Absolute Referencing"
          }
        ],
        "quizzes": [
          {
            "id": "deo8-q1",
            "question": "Every formula in Excel / Spreadsheet must begin with which character?",
            "options": [
              "+",
              "=",
              "@",
              "#"
            ],
            "correctIndex": 1,
            "explanation": "Every formula or function must start with the '=' sign."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  },
  {
    "id": "bus-215",
    "code": "215",
    "name": "Business Studies",
    "hindiName": "व्यवसाय अध्ययन",
    "icon": "💼",
    "color": "#6366f1",
    "lessonCountText": "8 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "Nature of business, forms of business organization, banking, insurance, transport & warehousing.",
    "lessons": [
      {
        "id": "bus-l1",
        "number": 1,
        "title": "Nature and Scope of Business",
        "hindiTitle": "व्यवसाय की प्रकृति और क्षेत्र",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/aozlwC3XwfY",
        "backupVideoUrl": "https://www.youtube.com/embed/iywvlUk2Wfg",
        "searchEmbedUrl": "https://www.youtube.com/embed/iywvlUk2Wfg",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=aozlwC3XwfY",
        "overview": "Concept of business, characteristics (economic activity, regular transactions, profit motive, risk uncertainty), comparison with profession and employment.",
        "keyConcepts": [
          "Business: Continuous production and exchange of goods/services for profit.",
          "Profession requires specialized qualification; Employment involves salary under agreement."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "What is Business?"
          },
          {
            "time": "11:00",
            "title": "Business vs Profession vs Employment"
          },
          {
            "time": "18:00",
            "title": "Profit Motive & Risk"
          }
        ],
        "quizzes": [
          {
            "id": "b1-q1",
            "question": "Which of the following is an essential characteristic of business?",
            "options": [
              "One-time transaction",
              "Absence of risk",
              "Regularity of dealings for profit",
              "Fixed monthly salary"
            ],
            "correctIndex": 2,
            "explanation": "Regularity of transactions aiming for profit is a defining feature of business."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "bus-l2",
        "number": 2,
        "title": "Business Activities - Industry and Commerce",
        "hindiTitle": "व्यावसायिक क्रियाएँ - उद्योग और वाणिज्य",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/iywvlUk2Wfg",
        "backupVideoUrl": "https://www.youtube.com/embed/aozlwC3XwfY",
        "searchEmbedUrl": "https://www.youtube.com/embed/aozlwC3XwfY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=iywvlUk2Wfg",
        "overview": "Classification of business activities: Industry (primary, secondary, tertiary) and Commerce (trade and aids to trade: transport, banking, insurance, warehousing, advertising).",
        "keyConcepts": [
          "Industry: Production of goods.",
          "Commerce: Distribution of goods from producer to consumer."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Industry Categories"
          },
          {
            "time": "12:00",
            "title": "Commerce & Trade"
          },
          {
            "time": "19:30",
            "title": "Aids to Trade"
          }
        ],
        "quizzes": [
          {
            "id": "b2-q1",
            "question": "Activities that bridge the gap between production and consumption are called:",
            "options": [
              "Extraction",
              "Commerce",
              "Genetic industry",
              "Manufacturing"
            ],
            "correctIndex": 1,
            "explanation": "Commerce encompasses trade and all supporting activities that facilitate exchange."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "bus-l3",
        "number": 3,
        "title": "Forms of Business Organisation",
        "hindiTitle": "व्यावसायिक संगठन के प्रारूप",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/m2IPvT920XM",
        "backupVideoUrl": "https://www.youtube.com/embed/WjMh-H8mC4g",
        "searchEmbedUrl": "https://www.youtube.com/embed/WjMh-H8mC4g",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=m2IPvT920XM",
        "overview": "Sole Proprietorship (features, merits, unlimited liability), Joint Hindu Family Business (Karta), Partnership (Partnership Deed, types of partners, unlimited liability).",
        "keyConcepts": [
          "Sole Proprietorship: Single owner, sole risk-bearer, unlimited liability.",
          "Partnership: Relation between persons agreeing to share profits."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Sole Proprietorship"
          },
          {
            "time": "12:00",
            "title": "Joint Hindu Family Business"
          },
          {
            "time": "19:00",
            "title": "Partnership Structure"
          }
        ],
        "quizzes": [
          {
            "id": "b3-q1",
            "question": "In a Joint Hindu Family business, the head who manages all affairs is called:",
            "options": [
              "Partner",
              "Karta",
              "Coparcener",
              "Director"
            ],
            "correctIndex": 1,
            "explanation": "The senior-most male/head of the family is known as the Karta."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "bus-l4",
        "number": 4,
        "title": "Company Form of Organisation",
        "hindiTitle": "कंपनी संगठन",
        "duration": "30 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/WjMh-H8mC4g",
        "backupVideoUrl": "https://www.youtube.com/embed/m2IPvT920XM",
        "searchEmbedUrl": "https://www.youtube.com/embed/m2IPvT920XM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=WjMh-H8mC4g",
        "overview": "Joint Stock Company: Artificial legal person, separate legal entity, perpetual succession, common seal, limited liability, Private Ltd vs Public Ltd companies, Cooperative Societies.",
        "keyConcepts": [
          "Limited Liability: Shareholders are liable only up to face value of unpaid shares.",
          "Perpetual Succession: Company's existence continues regardless of change in members."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Characteristics of Joint Stock Company"
          },
          {
            "time": "14:00",
            "title": "Private vs Public Company"
          },
          {
            "time": "22:00",
            "title": "Cooperative Principles"
          }
        ],
        "quizzes": [
          {
            "id": "b4-q1",
            "question": "Which feature ensures a company does not cease to exist upon the death or retirement of a shareholder?",
            "options": [
              "Common Seal",
              "Perpetual Succession",
              "Limited Liability",
              "Voluntary Association"
            ],
            "correctIndex": 1,
            "explanation": "Perpetual succession gives a company an immortal legal existence independent of members."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "bus-l5",
        "number": 5,
        "title": "Transport and Warehousing Services",
        "hindiTitle": "परिवहन और भंडारण सेवाएँ",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/NI9TLDIPVcs",
        "backupVideoUrl": "https://www.youtube.com/embed/aozlwC3XwfY",
        "searchEmbedUrl": "https://www.youtube.com/embed/aozlwC3XwfY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=NI9TLDIPVcs",
        "overview": "Modes of transport (roadways, railways, airways, waterways, pipelines), relative merits, functions of warehousing, types of warehouses (private, public, bonded warehouses).",
        "keyConcepts": [
          "Transport removes hindrance of place; Warehousing removes hindrance of time.",
          "Bonded Warehouses: Store imported goods pending customs duty payment."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Modes of Transport"
          },
          {
            "time": "12:00",
            "title": "Functions of Modern Warehouses"
          },
          {
            "time": "19:00",
            "title": "Bonded Warehouses"
          }
        ],
        "quizzes": [
          {
            "id": "b5-q1",
            "question": "Warehouses licensed by government to hold imported goods until customs duty is paid are called:",
            "options": [
              "Private warehouses",
              "Bonded warehouses",
              "Public warehouses",
              "Cooperative warehouses"
            ],
            "correctIndex": 1,
            "explanation": "Bonded warehouses store imported dutiable goods under customs control."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "bus-l6",
        "number": 6,
        "title": "Banking Services",
        "hindiTitle": "बैंकिंग सेवाएँ",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/Dugn51K_6WA",
        "backupVideoUrl": "https://www.youtube.com/embed/aozlwC3XwfY",
        "searchEmbedUrl": "https://www.youtube.com/embed/aozlwC3XwfY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=Dugn51K_6WA",
        "overview": "Types of bank accounts (Savings, Current, Recurring, Fixed Deposit), lending services (loans, overdraft, cash credit), electronic banking (NEFT, RTGS, IMPS, UPI, ATMs).",
        "keyConcepts": [
          "Overdraft Facility: Available on Current accounts allowing withdrawal exceeding balance.",
          "Digital Payments: RTGS for real-time high-value transfers, UPI for instant retail payments."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Types of Bank Accounts"
          },
          {
            "time": "12:00",
            "title": "Loans & Credit Facilities"
          },
          {
            "time": "20:00",
            "title": "E-Banking & UPI Ecosystem"
          }
        ],
        "quizzes": [
          {
            "id": "b6-q1",
            "question": "Overdraft facility is primarily provided to holders of which type of bank account?",
            "options": [
              "Savings Account",
              "Recurring Deposit Account",
              "Current Account",
              "Fixed Deposit Account"
            ],
            "correctIndex": 2,
            "explanation": "Current accounts opened by businesses carry overdraft facilities."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "bus-l7",
        "number": 7,
        "title": "Insurance Services",
        "hindiTitle": "बीमा सेवाएँ",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/EFeEAtXdzFU",
        "backupVideoUrl": "https://www.youtube.com/embed/Dugn51K_6WA",
        "searchEmbedUrl": "https://www.youtube.com/embed/Dugn51K_6WA",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=EFeEAtXdzFU",
        "overview": "Concept and need for insurance, fundamental principles (Utmost Good Faith, Insurable Interest, Indemnity, Subrogation), types of insurance (Life, Fire, Marine, Health).",
        "keyConcepts": [
          "Principle of Indemnity: Insured is restored to previous financial position, not allowed to profit.",
          "Life Insurance is contract of assurance, not indemnity."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Risk Sharing & Insurance Concept"
          },
          {
            "time": "11:30",
            "title": "Core Principles of Insurance"
          },
          {
            "time": "19:00",
            "title": "Life vs General Insurance"
          }
        ],
        "quizzes": [
          {
            "id": "b7-q1",
            "question": "The principle that the insured must fully disclose all material facts is called:",
            "options": [
              "Principle of Indemnity",
              "Principle of Utmost Good Faith",
              "Principle of Subrogation",
              "Principle of Contribution"
            ],
            "correctIndex": 1,
            "explanation": "Uberrimae Fidei (Utmost Good Faith) requires complete honesty and disclosure."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "bus-l8",
        "number": 8,
        "title": "Communication and Postal Services",
        "hindiTitle": "संचार और डाक सेवाएँ",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/EFeEAtXdzFU",
        "backupVideoUrl": "https://www.youtube.com/embed/aozlwC3XwfY",
        "searchEmbedUrl": "https://www.youtube.com/embed/aozlwC3XwfY",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=EFeEAtXdzFU",
        "overview": "Importance of business communication, postal services (Speed Post, Registered Post, Parcel Post), financial services of post offices, modern telecom and internet tools.",
        "keyConcepts": [
          "Speed Post: Time-bound express delivery service by Department of Posts.",
          "Postal Savings & Sukanya Samriddhi Yojana."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Business Communication Essentials"
          },
          {
            "time": "11:00",
            "title": "Postal Network Services"
          },
          {
            "time": "18:00",
            "title": "Digital Communication Channels"
          }
        ],
        "quizzes": [
          {
            "id": "b8-q1",
            "question": "Which postal service guarantees time-bound premium delivery of letters and parcels across India?",
            "options": [
              "Ordinary Mail",
              "Speed Post",
              "Book Post",
              "Registered Newspaper"
            ],
            "correctIndex": 1,
            "explanation": "Speed Post provides guaranteed fast delivery with tracking."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  },
  {
    "id": "hom-216",
    "code": "216",
    "name": "Home Science",
    "hindiName": "गृह विज्ञान",
    "icon": "🏡",
    "color": "#14b8a6",
    "lessonCountText": "8 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "Nutrition, family health, fabric care, resource management and human development.",
    "lessons": [
      {
        "id": "hom-l1",
        "number": 1,
        "title": "What is Home Science",
        "hindiTitle": "गृह विज्ञान क्या है",
        "duration": "24 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/H8WJ2KENlK0",
        "backupVideoUrl": "https://www.youtube.com/embed/yIoTRGfcMqM",
        "searchEmbedUrl": "https://www.youtube.com/embed/yIoTRGfcMqM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=H8WJ2KENlK0",
        "overview": "Meaning and scope of Home Science, misconceptions (not just cooking/stitching), 5 major components (Food & Nutrition, Resource Management, Fabric & Apparel, Human Development, Communication), career opportunities.",
        "keyConcepts": [
          "Home Science is an interdisciplinary field combining science and arts for quality living.",
          "Applies to both men and women for efficient home and career management."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Demystifying Home Science"
          },
          {
            "time": "10:00",
            "title": "Five Core Pillars"
          },
          {
            "time": "17:00",
            "title": "Career Prospects in Food, Textile & Design"
          }
        ],
        "quizzes": [
          {
            "id": "hs1-q1",
            "question": "Home Science combines principles from which fields?",
            "options": [
              "Only Culinary Arts",
              "Science and Arts for Better Family Living",
              "Only Interior Decoration",
              "Only Fashion Design"
            ],
            "correctIndex": 1,
            "explanation": "Home Science integrates scientific principles and art for human well-being."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hom-l2",
        "number": 2,
        "title": "Food and its Nutrients",
        "hindiTitle": "भोजन और उसके पोषक तत्व",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/H8WJ2KENlK0",
        "backupVideoUrl": "https://www.youtube.com/embed/yIoTRGfcMqM",
        "searchEmbedUrl": "https://www.youtube.com/embed/yIoTRGfcMqM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=H8WJ2KENlK0",
        "overview": "Macronutrients (Carbohydrates, Proteins, Fats), Micronutrients (Vitamins A, B-complex, C, D; Minerals: Iron, Calcium, Iodine), functions, food sources, and deficiency disorders (Kwashiorkor, Anemia, Goitre, Rickets).",
        "keyConcepts": [
          "Proteins: Body-building nutrient; Carbohydrates & Fats: Energy-giving.",
          "Deficiency: Lack of Iron causes Anemia; Vitamin A deficiency causes Night Blindness."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Nutrient Classification"
          },
          {
            "time": "12:00",
            "title": "Vitamins & Minerals Functions"
          },
          {
            "time": "20:00",
            "title": "Nutritional Deficiency Diseases"
          }
        ],
        "quizzes": [
          {
            "id": "hs2-q1",
            "question": "Deficiency of Vitamin C leads to which health condition?",
            "options": [
              "Rickets",
              "Night blindness",
              "Scurvy",
              "Beriberi"
            ],
            "correctIndex": 2,
            "explanation": "Vitamin C deficiency causes Scurvy (bleeding gums)."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hom-l3",
        "number": 3,
        "title": "Food Groups and Balanced Diet",
        "hindiTitle": "खाद्य समूह और संतुलित आहार",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/yIoTRGfcMqM",
        "backupVideoUrl": "https://www.youtube.com/embed/H8WJ2KENlK0",
        "searchEmbedUrl": "https://www.youtube.com/embed/H8WJ2KENlK0",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=yIoTRGfcMqM",
        "overview": "Five basic food groups (Cereals, Pulses, Milk & Meat, Fruits & Vegetables, Fats & Sugars), designing a balanced diet according to age, gender, activity level, and meal planning principles.",
        "keyConcepts": [
          "Balanced Diet: Contains all essential nutrients in proper proportions with dietary fiber.",
          "Factors influencing meal planning: Budget, seasonal availability, family preferences."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "The 5 Food Groups"
          },
          {
            "time": "11:00",
            "title": "Defining a Balanced Plate"
          },
          {
            "time": "18:00",
            "title": "Meal Planning for Different Ages"
          }
        ],
        "quizzes": [
          {
            "id": "hs3-q1",
            "question": "A balanced diet must contain nutrients in proportion along with adequate:",
            "options": [
              "Refined sugar",
              "Water and dietary fiber (roughage)",
              "Processed fats",
              "Artificial flavors"
            ],
            "correctIndex": 1,
            "explanation": "Water and roughage are critical for digestion alongside nutrients."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hom-l4",
        "number": 4,
        "title": "Methods of Cooking Food",
        "hindiTitle": "भोजन पकाने की विधियाँ",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/H8WJ2KENlK0",
        "backupVideoUrl": "https://www.youtube.com/embed/yIoTRGfcMqM",
        "searchEmbedUrl": "https://www.youtube.com/embed/yIoTRGfcMqM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=H8WJ2KENlK0",
        "overview": "Moist heat methods (boiling, steaming, pressure cooking), dry heat methods (roasting, baking), frying (shallow, deep), preserving nutritive value during cooking, fermentation and germination.",
        "keyConcepts": [
          "Steaming & Pressure Cooking: Conserves water-soluble vitamins (B and C).",
          "Germination (Sprouting) enhances Vitamin C and digestibility."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Why Cook Food?"
          },
          {
            "time": "11:00",
            "title": "Moist vs Dry Heat Cooking"
          },
          {
            "time": "19:00",
            "title": "Sprouting, Fermentation & Nutrient Retention"
          }
        ],
        "quizzes": [
          {
            "id": "hs4-q1",
            "question": "Which cooking method preserves the highest amount of water-soluble vitamins?",
            "options": [
              "Deep frying",
              "Steaming",
              "Open pan prolonged boiling",
              "Charcoal grilling"
            ],
            "correctIndex": 1,
            "explanation": "Steaming preserves sensitive vitamins because food does not touch excess water."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hom-l5",
        "number": 5,
        "title": "Preservation of Food",
        "hindiTitle": "खाद्य परिरक्षण",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/BqQJPCdmIp8",
        "backupVideoUrl": "https://www.youtube.com/embed/H8WJ2KENlK0",
        "searchEmbedUrl": "https://www.youtube.com/embed/H8WJ2KENlK0",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=BqQJPCdmIp8",
        "overview": "Causes of food spoilage (microorganisms, enzymes), principles of food preservation, domestic methods: dehydration/sun-drying, refrigeration, pickling (salt and oil), jams and jellies (sugar syrup).",
        "keyConcepts": [
          "High sugar concentration in jams creates hypertonic environment preventing bacterial growth.",
          "Salt and vinegar inhibit microbial proliferation in pickles."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Causes of Spoilage"
          },
          {
            "time": "10:00",
            "title": "Household Preservation Techniques"
          },
          {
            "time": "17:30",
            "title": "Pickling & Jam Making"
          }
        ],
        "quizzes": [
          {
            "id": "hs5-q1",
            "question": "What acts as the primary preservative in jams and jellies?",
            "options": [
              "Sodium benzoate only",
              "High concentration of sugar",
              "Vegetable oil",
              "Turmeric"
            ],
            "correctIndex": 1,
            "explanation": "Sugar in high concentration (68%+) acts as a natural preservative."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hom-l6",
        "number": 6,
        "title": "Fiber to Fabric",
        "hindiTitle": "तंतु से वस्त्र तक",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/QXT4OVM4vXI",
        "backupVideoUrl": "https://www.youtube.com/embed/H8WJ2KENlK0",
        "searchEmbedUrl": "https://www.youtube.com/embed/H8WJ2KENlK0",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=QXT4OVM4vXI",
        "overview": "Natural fibers (Cotton, Linen, Wool, Silk), synthetic fibers (Nylon, Polyester, Rayon), spinning, weaving, knitting, burning test identification of textile fibers.",
        "keyConcepts": [
          "Cotton: Absorbent, cool, burns like paper.",
          "Wool & Silk: Protein fibers, burn with burning hair smell.",
          "Nylon & Polyester: Synthetic petroleum polymers, melt into hard plastic beads."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Fiber Classification"
          },
          {
            "time": "12:00",
            "title": "Yarn to Fabric: Weaving & Knitting"
          },
          {
            "time": "20:00",
            "title": "The Burning Test for Fibers"
          }
        ],
        "quizzes": [
          {
            "id": "hs6-q1",
            "question": "During a burning test, a fiber that smells like burning hair is a:",
            "options": [
              "Cotton fiber",
              "Synthetic polyester",
              "Protein fiber (wool/silk)",
              "Linen fiber"
            ],
            "correctIndex": 2,
            "explanation": "Protein fibers (wool, silk) smell like burning hair due to sulfur bonds."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hom-l7",
        "number": 7,
        "title": "Care and Maintenance of Fabrics",
        "hindiTitle": "वस्त्रों की देखरेख और रख-रखाव",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/ANi709MYnWg",
        "backupVideoUrl": "https://www.youtube.com/embed/QXT4OVM4vXI",
        "searchEmbedUrl": "https://www.youtube.com/embed/QXT4OVM4vXI",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=ANi709MYnWg",
        "overview": "Stain removal techniques (grease, tea, ink, blood), soaps vs synthetic detergents, blueing and starching, ironing temperature guides, seasonal storage of woolens and silks.",
        "keyConcepts": [
          "Fresh stains are easier to remove than old ones.",
          "Never apply hot water to protein stains (blood/egg) as it coagulates the protein."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Laundry Principles"
          },
          {
            "time": "11:00",
            "title": "Stain Removal Chemistry"
          },
          {
            "time": "18:00",
            "title": "Storage of Silks & Woolens"
          }
        ],
        "quizzes": [
          {
            "id": "hs7-q1",
            "question": "Why should blood stains always be washed with cold water initially?",
            "options": [
              "Hot water makes color fade",
              "Hot water coagulates protein fixing the stain",
              "Cold water acts as bleach",
              "Soap only dissolves in cold water"
            ],
            "correctIndex": 1,
            "explanation": "Hot water sets protein stains permanently into the fiber mesh."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "hom-l8",
        "number": 8,
        "title": "Health, Sanitation and Well-being",
        "hindiTitle": "स्वास्थ्य, स्वच्छता और कल्याण",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/yIoTRGfcMqM",
        "backupVideoUrl": "https://www.youtube.com/embed/ANi709MYnWg",
        "searchEmbedUrl": "https://www.youtube.com/embed/ANi709MYnWg",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=yIoTRGfcMqM",
        "overview": "Personal hygiene, household sanitation, safe drinking water methods (boiling, chlorination, RO), waste disposal, prevention of communicable diseases (Malaria, Dengue, Typhoid, Cholera).",
        "keyConcepts": [
          "Potable Water: Colorless, odorless, free from pathogens.",
          "Vector control prevents transmission of malaria and dengue."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Sanitation in Daily Life"
          },
          {
            "time": "10:00",
            "title": "Water Purification Methods"
          },
          {
            "time": "17:00",
            "title": "Disease Prevention & Immunization"
          }
        ],
        "quizzes": [
          {
            "id": "hs8-q1",
            "question": "What is the simplest domestic method to kill disease-causing pathogens in drinking water?",
            "options": [
              "Sedimentation",
              "Vigorous boiling for 10-15 minutes",
              "Cooling in earthen pot",
              "Adding table salt"
            ],
            "correctIndex": 1,
            "explanation": "Boiling water kills bacteria, viruses, and parasites effectively."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  },
  {
    "id": "ich-223",
    "code": "223",
    "name": "Indian Culture & Heritage",
    "hindiName": "भारतीय संस्कृति और विरासत",
    "icon": "🏛️",
    "color": "#d97706",
    "lessonCountText": "8 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "Vedic tradition, architecture, classical arts, scientific heritage, and ancient philosophies.",
    "lessons": [
      {
        "id": "ich-l1",
        "number": 1,
        "title": "Culture - An Introduction",
        "hindiTitle": "संस्कृति - एक परिचय",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "backupVideoUrl": "https://www.youtube.com/embed/n7ndRwqJYDM",
        "searchEmbedUrl": "https://www.youtube.com/embed/n7ndRwqJYDM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=8Nn5uqE3C9w",
        "overview": "Definition of culture vs civilization, salient features of Indian culture (continuity, adaptability, unity in diversity, tolerance, spirituality and composite nature).",
        "keyConcepts": [
          "Culture is refined behavior, values, and traditions; Civilization is material progress.",
          "Unity in Diversity: Diverse languages, religions, and regions united by common civilizational ethos."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Defining Culture vs Civilization"
          },
          {
            "time": "11:00",
            "title": "Key Attributes of Indian Heritage"
          },
          {
            "time": "18:00",
            "title": "Unity in Diversity Concept"
          }
        ],
        "quizzes": [
          {
            "id": "ich1-q1",
            "question": "Which of the following is considered a core hallmark of Indian culture?",
            "options": [
              "Complete homogeneity",
              "Unity in Diversity",
              "Rejection of external influences",
              "Rigid uniformity"
            ],
            "correctIndex": 1,
            "explanation": "Unity in diversity is the hallmark of Indian civilization."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "ich-l2",
        "number": 2,
        "title": "Vedic Tradition and Philosophy",
        "hindiTitle": "वैदिक परंपरा और दर्शन",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "backupVideoUrl": "https://www.youtube.com/embed/n7ndRwqJYDM",
        "searchEmbedUrl": "https://www.youtube.com/embed/n7ndRwqJYDM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=8Nn5uqE3C9w",
        "overview": "Four Vedas (Rigveda, Samaveda, Yajurveda, Atharvaveda), Upanishads (philosophy of Brahman and Atman), Epics (Ramayana, Mahabharata, Bhagavad Gita), Six orthodox schools of Indian philosophy (Shad Darshana).",
        "keyConcepts": [
          "Rigveda: Oldest religious text in the world composed in Vedic Sanskrit.",
          "Upanishads: Philosophical culminations of Vedas exploring spiritual truth."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "The Four Vedas"
          },
          {
            "time": "12:00",
            "title": "Upanishadic Wisdom"
          },
          {
            "time": "20:00",
            "title": "Shad Darshanas (Six Philosophical Systems)"
          }
        ],
        "quizzes": [
          {
            "id": "ich2-q1",
            "question": "Which is the oldest of the four Vedas?",
            "options": [
              "Samaveda",
              "Yajurveda",
              "Rigveda",
              "Atharvaveda"
            ],
            "correctIndex": 2,
            "explanation": "The Rigveda is the most ancient text of the Vedic canon."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "ich-l3",
        "number": 3,
        "title": "Architecture of Ancient India",
        "hindiTitle": "प्राचीन भारत की वास्तुकला",
        "duration": "29 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/o7-i6KLoEkc",
        "backupVideoUrl": "https://www.youtube.com/embed/n7ndRwqJYDM",
        "searchEmbedUrl": "https://www.youtube.com/embed/n7ndRwqJYDM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=o7-i6KLoEkc",
        "overview": "Buddhist architecture (Stupas like Sanchi, Chaityas, Viharas), Rock-cut caves (Ajanta, Ellora, Elephanta), Temple architectural styles: Nagara (North), Dravida (South), and Vesara.",
        "keyConcepts": [
          "Sanchi Stupa: Buddhist architectural monument established under Emperor Ashoka.",
          "Dravidian Style: Featured majestic towering gopurams and pillared mandapas."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Harappan to Mauryan Architecture"
          },
          {
            "time": "12:00",
            "title": "Ajanta & Ellora Rock-Cut Marvels"
          },
          {
            "time": "21:00",
            "title": "Nagara vs Dravida Temple Styles"
          }
        ],
        "quizzes": [
          {
            "id": "ich3-q1",
            "question": "Which architectural style is characteristic of grand temples in South India with towering Gopurams?",
            "options": [
              "Nagara style",
              "Dravida style",
              "Vesara style",
              "Gothic style"
            ],
            "correctIndex": 1,
            "explanation": "Dravida style temples feature prominent gateway towers called Gopurams."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "ich-l4",
        "number": 4,
        "title": "Indian Sculpture and Art",
        "hindiTitle": "भारतीय मूर्तिकला और कला",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/o7-i6KLoEkc",
        "backupVideoUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "searchEmbedUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=o7-i6KLoEkc",
        "overview": "Gandhara School (Greco-Roman influence), Mathura School (indigenous red sandstone), Chola bronze sculptures (Nataraja: Cosmic Dance of Shiva), ancient mural paintings of Ajanta.",
        "keyConcepts": [
          "Nataraja Bronze: Supreme depiction of cosmic creation, preservation, and dissolution.",
          "Mathura School created early indigenous Buddha images in mottled red sandstone."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Gandhara vs Mathura Schools"
          },
          {
            "time": "12:00",
            "title": "Chola Bronzes & Nataraja"
          },
          {
            "time": "19:00",
            "title": "Ajanta Cave Murals"
          }
        ],
        "quizzes": [
          {
            "id": "ich4-q1",
            "question": "The celebrated Nataraja (Cosmic Dancer) bronze sculpture reached its artistic zenith under which dynasty?",
            "options": [
              "Gupta Dynasty",
              "Chola Dynasty",
              "Maurya Dynasty",
              "Mughal Dynasty"
            ],
            "correctIndex": 1,
            "explanation": "Chola bronzes of Tamil Nadu produced the world-renowned Nataraja icons."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "ich-l5",
        "number": 5,
        "title": "Indian Classical Music and Dance",
        "hindiTitle": "भारतीय शास्त्रीय संगीत और नृत्य",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "backupVideoUrl": "https://www.youtube.com/embed/o7-i6KLoEkc",
        "searchEmbedUrl": "https://www.youtube.com/embed/o7-i6KLoEkc",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=8Nn5uqE3C9w",
        "overview": "Bharata's Natyashastra, Two classical music traditions: Hindustani (North) and Carnatic (South), Ragas and Talas, Eight classical dance forms (Bharatanatyam, Kathak, Kathakali, Odissi, Kuchipudi, Manipuri, Mohiniyattam, Sattriya).",
        "keyConcepts": [
          "Natyashastra: Ancient foundation treatise on performing arts, aesthetics, and Rasa theory.",
          "Nine Rasas (Navarasa): Shringara, Hasya, Karuna, Raudra, Veera, Bhayanaka, Bibhatsa, Adbhuta, Shanta."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Roots in Natyashastra"
          },
          {
            "time": "12:00",
            "title": "Hindustani vs Carnatic Music"
          },
          {
            "time": "20:00",
            "title": "Eight Classical Dance Forms"
          }
        ],
        "quizzes": [
          {
            "id": "ich5-q1",
            "question": "Which ancient treatise by Sage Bharata serves as the primary sourcebook for Indian performing arts?",
            "options": [
              "Arthashastra",
              "Natyashastra",
              "Kama Sutra",
              "Charaka Samhita"
            ],
            "correctIndex": 1,
            "explanation": "The Natyashastra is the definitive classic on dance, music, and drama."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "ich-l6",
        "number": 6,
        "title": "Science and Technology in Ancient India",
        "hindiTitle": "प्राचीन भारत में विज्ञान और प्रौद्योगिकी",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/bDQkpNbsly4",
        "backupVideoUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "searchEmbedUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=bDQkpNbsly4",
        "overview": "Mathematical contributions (invention of zero, decimal system, Aryabhata's calculation of pi and planetary orbits), Astronomy, Metallurgy (Rustless Iron Pillar of Delhi), Ayurveda (Charaka Samhita for medicine, Sushruta Samhita for surgical techniques).",
        "keyConcepts": [
          "Aryabhata: Stated that Earth is spherical and rotates on its own axis.",
          "Sushruta: Father of Surgery who documented plastic surgery and cataract operations."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Mathematics & Invention of Zero"
          },
          {
            "time": "11:00",
            "title": "Aryabhata & Indian Astronomy"
          },
          {
            "time": "19:00",
            "title": "Ayurveda & Sushruta's Surgery"
          }
        ],
        "quizzes": [
          {
            "id": "ich6-q1",
            "question": "Who is revered as the Father of Surgery in ancient Indian medicine?",
            "options": [
              "Charaka",
              "Sushruta",
              "Patanjali",
              "Varahamihira"
            ],
            "correctIndex": 1,
            "explanation": "Sushruta authored the Sushruta Samhita and pioneered ancient surgical methods."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "ich-l7",
        "number": 7,
        "title": "Social Structure and Family Systems",
        "hindiTitle": "सामाजिक संरचना और परिवार प्रणाली",
        "duration": "26 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "backupVideoUrl": "https://www.youtube.com/embed/T_sGTspaF4Y",
        "searchEmbedUrl": "https://www.youtube.com/embed/T_sGTspaF4Y",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=8Nn5uqE3C9w",
        "overview": "Four Purusharthas (Dharma, Artha, Kama, Moksha), Ashrama system (Brahmacharya, Grihastha, Vanaprastha, Sannyasa), joint family system, status of women across historical epochs.",
        "keyConcepts": [
          "Four Life Goals (Purusharthas): Righteousness, wealth, desires, spiritual liberation.",
          "Four Stages (Ashramas) organizing human life cycle."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "The Four Purusharthas"
          },
          {
            "time": "11:00",
            "title": "The Four Ashramas System"
          },
          {
            "time": "18:00",
            "title": "Joint Family Values"
          }
        ],
        "quizzes": [
          {
            "id": "ich7-q1",
            "question": "Which Purushartha represents the ultimate spiritual goal of liberation from cycle of rebirth?",
            "options": [
              "Dharma",
              "Artha",
              "Kama",
              "Moksha"
            ],
            "correctIndex": 3,
            "explanation": "Moksha represents ultimate spiritual emancipation and liberation."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "ich-l8",
        "number": 8,
        "title": "Education Systems of Ancient India",
        "hindiTitle": "प्राचीन शिक्षा प्रणालियाँ - तक्षशिला व नालंदा",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/bDQkpNbsly4",
        "backupVideoUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "searchEmbedUrl": "https://www.youtube.com/embed/8Nn5uqE3C9w",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=bDQkpNbsly4",
        "overview": "Gurukula tradition, Guru-Shishya parampara, world-famous ancient universities: Takshashila (medical and statecraft center, Chanakya), Nalanda (vast international residential university with Dharmaganja library, visited by Xuanzang).",
        "keyConcepts": [
          "Nalanda University: Global center of higher learning attracting students from Tibet, China, Korea, and Central Asia.",
          "Oral tradition (Shruti & Smriti) preserving profound textual wisdom."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Gurukula Method & Oral Pedagogy"
          },
          {
            "time": "12:00",
            "title": "Takshashila & Chanakya"
          },
          {
            "time": "20:00",
            "title": "Nalanda University & International Scholars"
          }
        ],
        "quizzes": [
          {
            "id": "ich8-q1",
            "question": "Which ancient university in modern-day Bihar housed the famed Dharmaganja library and hosted scholar Xuanzang?",
            "options": [
              "Takshashila",
              "Nalanda",
              "Vikramashila",
              "Vallabhi"
            ],
            "correctIndex": 1,
            "explanation": "Nalanda Mahavihara was the international university visited by Xuanzang."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  },
  {
    "id": "psy-222",
    "code": "222",
    "name": "Psychology",
    "hindiName": "मनोविज्ञान",
    "icon": "🧠",
    "color": "#a855f7",
    "lessonCountText": "8 lessons",
    "playlistUrl": "https://www.youtube.com/embed/videoseries?list=PL2FmSYPRblR3PgWowzCl6t_KhRmu4CvjM",
    "description": "Human behavior, cognitive processes, personality development, emotion & life-span growth.",
    "lessons": [
      {
        "id": "psy-l1",
        "number": 1,
        "title": "An Introduction to Psychology",
        "hindiTitle": "मनोविज्ञान का परिचय",
        "duration": "25 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/vo4pMVb0R6M",
        "backupVideoUrl": "https://www.youtube.com/embed/hFV71QPvX2I",
        "searchEmbedUrl": "https://www.youtube.com/embed/hFV71QPvX2I",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=vo4pMVb0R6M",
        "overview": "Definition of psychology as scientific study of behavior and mental processes, historical evolution (Wundt, James, Freud, Watson), major branches (clinical, educational, cognitive, social psychology).",
        "keyConcepts": [
          "Psychology: Systematic scientific inquiry into overt behavior and covert mental activities.",
          "Wilhelm Wundt founded first psychology laboratory in Leipzig (1879)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "What is Psychology?"
          },
          {
            "time": "11:00",
            "title": "Schools of Thought: Structuralism to Behaviorism"
          },
          {
            "time": "18:00",
            "title": "Branches & Applications"
          }
        ],
        "quizzes": [
          {
            "id": "p1-q1",
            "question": "Who established the first psychological laboratory in Leipzig, Germany in 1879?",
            "options": [
              "Sigmund Freud",
              "Wilhelm Wundt",
              "Ivan Pavlov",
              "B.F. Skinner"
            ],
            "correctIndex": 1,
            "explanation": "Wilhelm Wundt is recognized as the father of experimental psychology."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "psy-l2",
        "number": 2,
        "title": "Methods of Psychology",
        "hindiTitle": "मनोविज्ञान की विधियाँ",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/hFV71QPvX2I",
        "backupVideoUrl": "https://www.youtube.com/embed/vo4pMVb0R6M",
        "searchEmbedUrl": "https://www.youtube.com/embed/vo4pMVb0R6M",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=hFV71QPvX2I",
        "overview": "Scientific inquiry methods: Naturalistic observation, experimental method (independent & dependent variables, control group), survey method, case study method, ethical standards in research.",
        "keyConcepts": [
          "Experimental Method: Only method establishing cause-and-effect relationships.",
          "Independent Variable is manipulated; Dependent Variable is measured."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Observation vs Experimentation"
          },
          {
            "time": "12:00",
            "title": "Variables in Experimental Research"
          },
          {
            "time": "20:00",
            "title": "Surveys & Case Studies"
          }
        ],
        "quizzes": [
          {
            "id": "p2-q1",
            "question": "In an experiment, the factor deliberately manipulated by the researcher is the:",
            "options": [
              "Dependent variable",
              "Independent variable",
              "Extraneous variable",
              "Control constant"
            ],
            "correctIndex": 1,
            "explanation": "The independent variable is manipulated to observe its effect on the dependent variable."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "psy-l3",
        "number": 3,
        "title": "Individual Differences and Intelligence",
        "hindiTitle": "व्यक्तिगत भिन्नताएँ और बुद्धि",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/8nuWJbuBcAA",
        "backupVideoUrl": "https://www.youtube.com/embed/vo4pMVb0R6M",
        "searchEmbedUrl": "https://www.youtube.com/embed/vo4pMVb0R6M",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=8nuWJbuBcAA",
        "overview": "Nature vs nurture in human development, concept of intelligence, Alfred Binet's IQ concept (IQ = MA / CA * 100), Gardner's Multiple Intelligences theory, emotional intelligence (EQ).",
        "keyConcepts": [
          "IQ Formula: Mental Age (MA) / Chronological Age (CA) * 100.",
          "Gardner proposed 8 distinct types of intelligence (Linguistic, Logical-Math, Spatial, Musical, etc.)."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Why Humans Differ: Heredity & Environment"
          },
          {
            "time": "12:00",
            "title": "Measuring Intelligence & IQ Score"
          },
          {
            "time": "20:00",
            "title": "Multiple Intelligences & EQ"
          }
        ],
        "quizzes": [
          {
            "id": "p3-q1",
            "question": "If a child has a Mental Age of 12 and Chronological Age of 10, what is the IQ?",
            "options": [
              "100",
              "110",
              "120",
              "140"
            ],
            "correctIndex": 2,
            "explanation": "IQ = (MA / CA) * 100 = (12 / 10) * 100 = 120."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "psy-l4",
        "number": 4,
        "title": "Learning Processes",
        "hindiTitle": "अधिगम प्रक्रियाएँ",
        "duration": "30 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/qG2SwE_6uVM",
        "backupVideoUrl": "https://www.youtube.com/embed/HVWbrNls-Kw",
        "searchEmbedUrl": "https://www.youtube.com/embed/HVWbrNls-Kw",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=qG2SwE_6uVM",
        "overview": "Definition of learning as relatively permanent behavior change, Classical Conditioning (Pavlov's dog experiment), Operant Conditioning (Skinner's reinforcement & punishment), Observational Learning (Bandura's Bobo doll experiment).",
        "keyConcepts": [
          "Pavlov: Unconditioned Stimulus (Food) paired with Conditioned Stimulus (Bell).",
          "Skinner: Positive reinforcement increases likelihood of desired behavior."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "What Constitutes Learning?"
          },
          {
            "time": "12:00",
            "title": "Pavlovian Classical Conditioning"
          },
          {
            "time": "21:30",
            "title": "Skinner's Operant Reinforcement"
          }
        ],
        "quizzes": [
          {
            "id": "p4-q1",
            "question": "Who conducted the classical conditioning experiment pairing a ringing bell with food presentation?",
            "options": [
              "B.F. Skinner",
              "Ivan Pavlov",
              "Albert Bandura",
              "Edward Thorndike"
            ],
            "correctIndex": 1,
            "explanation": "Ivan Pavlov discovered classical conditioning in salivation reflexes."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "psy-l5",
        "number": 5,
        "title": "Memory and Forgetting",
        "hindiTitle": "स्मृति और विस्मरण",
        "duration": "28 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/HVWbrNls-Kw",
        "backupVideoUrl": "https://www.youtube.com/embed/qG2SwE_6uVM",
        "searchEmbedUrl": "https://www.youtube.com/embed/qG2SwE_6uVM",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=HVWbrNls-Kw",
        "overview": "Stages of memory (Encoding, Storage, Retrieval), Atkinson-Shiffrin model (Sensory Memory, Short-Term Memory 7+-2 items, Long-Term Memory), Ebbinghaus forgetting curve, mnemonics to enhance study retention.",
        "keyConcepts": [
          "Short-Term Memory (STM) holds approximately 7+-2 chunks of information for 20-30 seconds.",
          "Long-Term Memory has virtually unlimited storage capacity."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Three Stages of Memory"
          },
          {
            "time": "12:00",
            "title": "Sensory, STM, and LTM Architecture"
          },
          {
            "time": "20:00",
            "title": "Causes of Forgetting & Mnemonics"
          }
        ],
        "quizzes": [
          {
            "id": "p5-q1",
            "question": "What is the typical working capacity of Short-Term Memory according to George Miller?",
            "options": [
              "3 items",
              "7 +- 2 items",
              "20 items",
              "Unlimited"
            ],
            "correctIndex": 1,
            "explanation": "Miller's magical number is 7 +- 2 chunks of information."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "psy-l6",
        "number": 6,
        "title": "Thinking and Problem Solving",
        "hindiTitle": "चिंतन और समस्या समाधान",
        "duration": "27 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/R-sVnmmw6WY",
        "backupVideoUrl": "https://www.youtube.com/embed/8nuWJbuBcAA",
        "searchEmbedUrl": "https://www.youtube.com/embed/8nuWJbuBcAA",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=R-sVnmmw6WY",
        "overview": "Building blocks of thought (concepts, mental imagery, language), types of thinking (convergent vs divergent creative thinking), problem solving stages (trial and error, algorithms, heuristics, insight).",
        "keyConcepts": [
          "Divergent Thinking: Generates multiple original solutions; hallmark of creativity.",
          "Convergent Thinking: Aims for single correct conventional answer."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Nature of Mental Thought"
          },
          {
            "time": "11:00",
            "title": "Convergent vs Creative Divergent Thinking"
          },
          {
            "time": "19:00",
            "title": "Problem-Solving Strategies"
          }
        ],
        "quizzes": [
          {
            "id": "p6-q1",
            "question": "Which style of thinking generates many diverse and innovative solutions to a problem?",
            "options": [
              "Convergent thinking",
              "Divergent thinking",
              "Rigid thinking",
              "Mechanical thinking"
            ],
            "correctIndex": 1,
            "explanation": "Divergent thinking explores varied creative possibilities."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "psy-l7",
        "number": 7,
        "title": "Motivation and Emotion",
        "hindiTitle": "अभिप्रेरणा और संवेग",
        "duration": "29 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/9hdSLiHaJz8",
        "backupVideoUrl": "https://www.youtube.com/embed/8nz2dtv--ok",
        "searchEmbedUrl": "https://www.youtube.com/embed/8nz2dtv--ok",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=9hdSLiHaJz8",
        "overview": "Motivational cycle (Need -> Drive -> Arousal -> Goal-directed behavior -> Goal achievement -> Reduction of arousal), Maslow's Hierarchy of Needs, nature of emotions, physiological components of emotion.",
        "keyConcepts": [
          "Maslow's Pyramid: Physiological -> Safety -> Love/Belonging -> Esteem -> Self-Actualization.",
          "Intrinsic Motivation stems from inner satisfaction; Extrinsic from external rewards."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "The Motivational Cycle"
          },
          {
            "time": "12:00",
            "title": "Maslow's Hierarchy of Needs"
          },
          {
            "time": "21:00",
            "title": "Components & Management of Emotions"
          }
        ],
        "quizzes": [
          {
            "id": "p7-q1",
            "question": "What is the highest level need at the apex of Abraham Maslow's pyramid?",
            "options": [
              "Physiological needs",
              "Safety needs",
              "Self-Actualization",
              "Social belonging"
            ],
            "correctIndex": 2,
            "explanation": "Self-actualization (realizing one's full potential) is the peak of Maslow's hierarchy."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      },
      {
        "id": "psy-l8",
        "number": 8,
        "title": "Human Development Across Life Stages",
        "hindiTitle": "मानव विकास की अवस्थाएँ",
        "duration": "31 mins",
        "primaryVideoUrl": "https://www.youtube.com/embed/8nz2dtv--ok",
        "backupVideoUrl": "https://www.youtube.com/embed/9hdSLiHaJz8",
        "searchEmbedUrl": "https://www.youtube.com/embed/9hdSLiHaJz8",
        "directYoutubeUrl": "https://www.youtube.com/watch?v=8nz2dtv--ok",
        "overview": "Growth vs development, stages of lifespan: Prenatal, Infancy, Childhood, Adolescence (identity formation, peer pressure, hormonal transitions), Adulthood and Aging.",
        "keyConcepts": [
          "Cephalocaudal (head-to-toe) and Proximodistal (center-outward) developmental principles.",
          "Erikson's identity vs role confusion in adolescence."
        ],
        "timestamps": [
          {
            "time": "00:00",
            "title": "Principles of Developmental Psychology"
          },
          {
            "time": "13:00",
            "title": "Childhood Milestones"
          },
          {
            "time": "22:00",
            "title": "Adolescence & Identity Development"
          }
        ],
        "quizzes": [
          {
            "id": "p8-q1",
            "question": "Development proceeding from the head downward to the lower parts of the body is called:",
            "options": [
              "Proximodistal",
              "Cephalocaudal",
              "Horizontal",
              "Linear"
            ],
            "correctIndex": 1,
            "explanation": "Cephalocaudal direction describes head-to-toe developmental sequence."
          }
        ],
        "isRestored": true,
        "videoStatusNote": "Verified HD Lecture"
      }
    ]
  }
];

export const FACT_FLUENCY_POOL = [
  {
    "subject": "Mathematics",
    "question": "Value of 2^0 is:",
    "answer": "1",
    "options": [
      "0",
      "1",
      "2",
      "Undefined"
    ],
    "explanation": "Any non-zero number raised to power 0 equals 1."
  },
  {
    "subject": "Mathematics",
    "question": "sqrt(144) equals:",
    "answer": "12",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "explanation": "12 * 12 = 144."
  },
  {
    "subject": "Science",
    "question": "The SI unit of temperature is:",
    "answer": "Kelvin",
    "options": [
      "Celsius",
      "Fahrenheit",
      "Kelvin",
      "Joule"
    ],
    "explanation": "Kelvin (K) is the SI base unit."
  },
  {
    "subject": "Science",
    "question": "Substance converting directly from solid to gas undergoes:",
    "answer": "Sublimation",
    "options": [
      "Evaporation",
      "Sublimation",
      "Condensation",
      "Melting"
    ],
    "explanation": "Solid to gas direct transition is sublimation."
  },
  {
    "subject": "Social Science",
    "question": "Year of the French Revolution:",
    "answer": "1789",
    "options": [
      "1776",
      "1789",
      "1857",
      "1914"
    ],
    "explanation": "French Revolution erupted in 1789."
  },
  {
    "subject": "Economics",
    "question": "Who is regarded as Father of Economics?",
    "answer": "Adam Smith",
    "options": [
      "Karl Marx",
      "Adam Smith",
      "Marshall",
      "Keynes"
    ],
    "explanation": "Adam Smith authored Wealth of Nations (1776)."
  },
  {
    "subject": "Data Entry",
    "question": "Volatile primary computer memory is:",
    "answer": "RAM",
    "options": [
      "ROM",
      "RAM",
      "Hard Disk",
      "CD-ROM"
    ],
    "explanation": "RAM loses its contents upon power loss."
  },
  {
    "subject": "Business Studies",
    "question": "Activity removing the hindrance of place is:",
    "answer": "Transport",
    "options": [
      "Insurance",
      "Transport",
      "Banking",
      "Warehousing"
    ],
    "explanation": "Transport moves goods from place of production to market."
  },
  {
    "subject": "Psychology",
    "question": "Founder of the first psychology lab (1879):",
    "answer": "Wilhelm Wundt",
    "options": [
      "Freud",
      "Wilhelm Wundt",
      "Pavlov",
      "Skinner"
    ],
    "explanation": "Wundt established the first laboratory in Leipzig."
  }
];

export const DEFAULT_FLASHCARDS = [
  {
    "id": "fc-1",
    "subject": "Mathematics",
    "chapter": "Exponents (Lesson 2)",
    "front": "What is the rule for fractional exponents: a^(m/n)?",
    "back": "a^(m/n) = n_root(a^m) = (n_root(a))^m.\nThe denominator 'n' indicates root order, and numerator 'm' indicates power.",
    "status": "all"
  },
  {
    "id": "fc-2",
    "subject": "Mathematics",
    "chapter": "Algebra (Lesson 4)",
    "front": "What does a^3 + b^3 + c^3 equal if a + b + c = 0?",
    "back": "It equals 3abc.\nFormula: a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca). When a+b+c=0, a^3+b^3+c^3 = 3abc.",
    "status": "all"
  },
  {
    "id": "fc-3",
    "subject": "Science",
    "chapter": "Matter (Lesson 2)",
    "front": "Why does steam at 100 deg C burn more severely than boiling water at 100 deg C?",
    "back": "Steam possesses latent heat of vaporization (22.5 * 10^5 J/kg) absorbed during phase change, releasing greater thermal energy on skin.",
    "status": "all"
  },
  {
    "id": "fc-4",
    "subject": "Social Science",
    "chapter": "British Rule (Lesson 5)",
    "front": "What was Dadabhai Naoroji's Drain of Wealth theory?",
    "back": "It proved that Britain systematically siphoned huge financial resources out of India through home charges, uncompensated exports, and pensions without economic return.",
    "status": "all"
  },
  {
    "id": "fc-5",
    "subject": "Economics",
    "chapter": "Production (Lesson 4)",
    "front": "Name the 4 factors of production and their rewards.",
    "back": "1. Land -> Rent\n2. Labour -> Wages\n3. Capital -> Interest\n4. Entrepreneurship -> Profit",
    "status": "all"
  },
  {
    "id": "fc-6",
    "subject": "Psychology",
    "chapter": "Memory (Lesson 5)",
    "front": "What is George Miller's Magic Number for Short-Term Memory?",
    "back": "7 +- 2 chunks of information.\nMost individuals can hold between 5 to 9 discrete items in working memory simultaneously.",
    "status": "all"
  }
];
