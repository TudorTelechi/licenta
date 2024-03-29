import {ImageSourcePropType} from 'react-native';
import {bran, Bucura, Carpati, Corvinilor} from '../assets/images';

export type PlacesDataType = {
  id: number;
  name: string;
  location: string;
  details: string;
  category: 'mountains' | 'temples' | 'lakes';
  image: ImageSourcePropType;
};

export const PlacesData: PlacesDataType[] = [
  {
    id: 0,
    name: 'Castelul Bran',
    location:
      'Str. General Traian Moșoiu nr. 24\nLocalitate: Bran\nJudeț: Brașov\n',
    details:
      'Luni: 12:00-16:00\nMarți Duminică: 09:00-16:00\n\nUn document emis de regele Ludovic I al Ungariei (1342-1382) la 17 noiembrie 1377 în Zvolen le confirmă sașilor din Scaunul Brașovului (totaque communitas Saxonum sedis Brassouiensis) dreptul de a ridica, conform promisiunii, pe cheltuiala și cu meșterii lor, o nouă cetate de piatră la Bran (promiserunt novum castrum in lapide Tydrici edificare). Cu această ocazie, regele le promite brașovenilor că, dacă Țara Românească va ajunge "în mâinile noastre", atunci vama va fi mutată de la Rucăr (Ruffa Arbor) la Bran. Referința din textul documentului din 1377 cu privire la o "nouă cetate de piatră" permite deducția că fortificația de piatră, ce urma să fie edificată pe acest loc, a fost precedată de o întăritură de graniță mai veche. Această cetate, probabil din lemn, a fost ridicată de cavalerii teutoni între 1211-1225. Ea îi este atribuită magistrului Theodorikus. În secolul al XIII-lea, teritoriul cetății Bran a fost supus jurisdicției comitatului regal de Alba Iulia. În anul 1395, Sigismund de Luxemburg, împărat german și rege al Ungariei, a folosit castelul Bran ca bază strategică pentru o incursiune în Țara Românească, în urma căreia l-a îndepărtat pe voievodul Vlad Uzurpatorul, rivalul lui Mircea cel Bătrân, vasalul său. Bran în Harta Iosefină a Transilvaniei, 1769-1773 În 1407, Sigismund îi acordă lui Mircea stăpânirea castelelor Bran (fără domeniul aferent) și Bologa. Branul rămâne sub autoritatea Țării Românești până în 1419. În anul 1427 castelul Bran a trecut din proprietatea scaunului Brașovului în cea a Coroanei Ungariei, care a finanțat lucrările de fortificare și de extindere. În 1498 cetatea Branului a fost închiriată de regalitatea maghiară către Scaunul Brașovului. La 1 decembrie 1920, din inițiativa primarului Karl Ernst Schnell, Consiliul Orășenesc Brașov a donat castelul reginei Maria a României, în semn de recunoștință față de contribuția sa la înfăptuirea Marii Uniri. La moartea reginei, în 1938, castelul a fost moștenit de către fiica sa preferată, principesa Ileana, căsătorită cu arhiducele Anton, membru al fostei familii imperiale de Habsburg. În timpul celui de-al Doilea Război Mondial, Ileana s-a întors cu familia în țară și a locuit la Bran. A înființat un spital pentru victimele războiului. După 1948 Castelul Bran a fost naționalizat și a intrat în proprietatea statului român. Castelul a fost deschis vizitelor publice începând cu 1956, fiind amenajat ca muzeu de istorie și artă feudală. În 1987 a intrat în restaurare, lucrare finalizată în linii mari în 1993. Castelul se redeschide ca muzeu și reintră în circuitul turistic. La 18 mai 2006, după o perioadă de proceduri juridice, castelul este retrocedat legal moștenitorilor din familia de Habsburg. Cu toate acestea, statul român, prin Ministerul Culturii, îl va administra tranzitoriu și în următorii trei ani. La data de 1 iunie 2009, castelul intră pe deplin în posesia moștenitorilor Principesei Ileana: arhiducele Dominic de Habsburg, arhiducesa Maria Magdalena Holzhausen și arhiducesa Elisabeta Sandhofer.',
    category: 'temples',
    image: bran,
  },
  {
    id: 1,
    name: 'Castelul Corvinilor',
    location:
      'Str. Curtea Corvineștilor nr. 1-3\nLocalitate: Hunedoara\nȚara: România\n',
    details:
      'Deschide la 9:00\nÎnchide la 18:00\n\nPret Bilet:15RON\n\nBine aţi venit în cetatea Hunedoarei, devenită castelul celui mai strălucit rege al Ungariei medievale, Matia Corvin. Monumentul are un farmec aparte datorat stilurilor de construcţie diverse, a prezenţei unor inovaţii în plan militar şi civil, precum şi vieţii tumultoase de curte care l-a animat vreme de peste 400 de ani. Castelul Corvinilor impresionează prin prezenţa sa, ce domină oraşul Hunedoara. Pentru cei atraşi de evul mediu, castelul reprezintă un monument singular în România şi printre cele mai atractive din spaţiul european.',
    category: 'temples',
    image: Corvinilor,
  },
  {
    id: 2,
    name: 'Lacul Bucura',
    location: 'Lacul Bucura',
    details: '',
    category: 'lakes',
    image: Bucura,
  },
  {
    id: 3,
    name: 'Carpati',
    location: 'Carpati',
    details: '',
    category: 'mountains',
    image: Carpati,
  },
];
