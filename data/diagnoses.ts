import { Diagnosis } from '../src/types';
import { toNewDiagnosis } from '../src/utils';

const data = [
  {
    "id": 1,
    "code": "M24.2",
    "name": "Disorder of ligament",
    "latin": "Morbositas ligamenti"
  },
  {
    "id": 2,
    "code": "M51.2",
    "name": "Other specified intervertebral disc displacement",
    "latin": "Alia dislocatio disci intervertebralis specificata"
  },
  {
    "id": 3,
    "code": "S03.5",
    "name":
    "Sprain and strain of joints and ligaments of other and unspecified parts of head",
    "latin":
    "Distorsio et/sive distensio articulationum et/sive ligamentorum partium aliarum sive non specificatarum capitis"
  },
  {
    "id": 4,
    "code": "J10.1",
    "name":
    "Influenza with other respiratory manifestations, other influenza virus codeentified",
    "latin":
    "Influenza cum aliis manifestationibus respiratoriis ab agente virali codeentificato"
  },
  {
    "id": 5,
    "code": "J06.9",
    "name": "Acute upper respiratory infection, unspecified",
    "latin": "Infectio acuta respiratoria superior non specificata"
  },
  {
    "id": 6,
    "code": "Z57.1",
    "name": "Occupational exposure to radiation"
  },
  {
    "id": 7,
    "code": "N30.0",
    "name": "Acute cystitis",
    "latin": "Cystitis acuta"
  },
  {
    "id": 8,
    "code": "H54.7",
    "name": "Unspecified visual loss",
    "latin": "Amblyopia NAS"
  },
  {
    "id": 9,
    "code": "J03.0",
    "name": "Streptococcal tonsillitis",
    "latin": "Tonsillitis (palatina) streptococcica"
  },
  {
    "id": 10,
    "code": "L60.1",
    "name": "Onycholysis",
    "latin": "Onycholysis"
  },
  {
    "id": 111,
    "code": "Z74.3",
    "name": "Need for continuous supervision"
  },
  {
    "id": 12,
    "code": "L20",
    "name": "Atopic dermatitis",
    "latin": "Atopic dermatitis"
  },
  {
    "id": 13,
    "code": "F43.2",
    "name": "Adjustment disorders",
    "latin": "Perturbationes adaptationis"
  },
  {
    "id": 14,
    "code": "S62.5",
    "name": "Fracture of thumb",
    "latin": "Fractura [ossis/ossium] pollicis"
  },
  {
    "id": 15,
    "code": "H35.29",
    "name": "Other proliferative retinopathy",
    "latin": "Alia retinopathia proliferativa"
  },
  {
    "id": 16,
    "code": "J12.82",
    "name": "Pneumonia due to coronavirus disease"
  }
]

const diagnoses: Diagnosis [] = data.map(obj => {
  const object = toNewDiagnosis(obj) as Diagnosis;
  object.id = obj.id;

  return object;
});

export default diagnoses;