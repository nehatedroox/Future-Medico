  let suggestions =[ 
 
    { id: 1, title: 'About', collegeName:'MBBS' }, 
    { id: 2, title: 'About2', collegeName:'BDS' },
    { id: 3, title: 'About3', collegeName:'BAMS' },
    { id: 4, title: 'About4', collegeName:'BHMS' },
    { id: 5, title: 'About5', collegeName:'MDS' },
    { id: 6, title: 'About6', collegeName:'BSc. Nursing' },
    { id: 7, title: 'About7', collegeName:'GNM' },
    { id: 8, title: 'About8', collegeName:'BPharma' },
    { id: 9, title: 'About9', collegeName:'Medical Allied' },

     //Top Medical Colleges in Karnataka
    { id: 10, title: 'About', collegeName:'National Institute of Mental Health & Neuro Sciences – Bangalore' },
    { id: 11, title: 'About', collegeName:'Kasturba Medical College – Manipal' },
    { id: 12, title: 'About', collegeName:'St. Johns Medical College – Bangalore' },
    { id: 13, title: 'About', collegeName:'JSS Medical College – Mysore' },
    { id: 14, title: 'About', collegeName:'Kasturba Medical College – Mangaluru' },
    { id: 15, title: 'About', collegeName:'M.S. Ramaiah Medical College – Bangaluru' },
    { id: 16, title: 'About', collegeName:'K.S. Hegde Medical Academy – Mangaluru' },

     //Popular Medical Colleges in Bangalore
    { id: 17, title: 'About', collegeName:'M. S. Ramaiah Medical College' },
    { id: 18, title: 'About', collegeName:'BGS Global Institute of Medical Sciences' },
    { id: 19, title: 'About', collegeName:'Vydehi Institute of Medical Sciences and Research Centre' },
    { id: 20, title: 'About', collegeName:'Bangalore Medical College & research Institute' },
    { id: 21, title: 'About', collegeName:'Kempegowda institute of medical science' },
    { id: 22, title: 'About', collegeName:'Dr. Ambedkar Medical College' },
    { id: 23, title: 'About', collegeName:'Rajarajeshwari medical college & hospital' },
    { id: 24, title: 'About', collegeName:'Sapthagiri Institute of Medical Science and Research Centre' },
    { id: 25, title: 'About', collegeName:'East Point institute of medical science' },
    { id: 26, title: 'About', collegeName:'Akash Medical College' },
    
    //MBBS
    { id: 1, title: 'About', collegeName:'mbbs' }, 

    //BDS
    { id: 2, title: 'About2', collegeName:'bds' },

    //BAMS
    { id: 3, title: 'About3', collegeName:'bams' },

    //BHMS
    { id: 4, title: 'About4', collegeName:'bhms' },

    //MDS
    { id: 5, title: 'About5', collegeName:'mds' },

    //BSc. Nursing
    { id: 6, title: 'About6', collegeName:'BSC. Nursing' },
    { id: 6, title: 'About6', collegeName:'bsc. nursing' },
    { id: 6, title: 'About6', collegeName:'BSC nursing' },

   //GNM
   { id: 7, title: 'About7', collegeName:'gnm' },
   { id: 7, title: 'About7', collegeName:'gnm college' },

    //BPharma
    { id: 8, title: 'About8', collegeName:'B pharma' },
    { id: 8, title: 'About8', collegeName:'b pharma' },

   //Medical Allied
    { id: 9, title: 'About9', collegeName:'medical allied' },
    { id: 9, title: 'About9', collegeName:'allied' },
    

    //National Institute of Mental Health & Neuro Sciences – Bangalore
    { id: 10, title: 'About', collegeName:'national institute of mental health & neuro sciences,bangalore' },
    { id: 10, title: 'About', collegeName:'national institute of mental' },
    { id: 10, title: 'About', collegeName:'national institute of mental health' },
    { id: 10, title: 'About', collegeName:'national institute of mental health & neuro' },
    { id: 10, title: 'About', collegeName:'national institute of mental health and neuro' },
    { id: 10, title: 'About', collegeName:'national institute of mental health & neuro science' },
    { id: 10, title: 'About', collegeName:'national institute of mental health & neuro sciences,bangalore' },

    //Kasturba Medical College – Manipal
    { id: 11, title: 'About', collegeName:'kasturba medical college manipal' },
    { id: 11, title: 'About', collegeName:'kasturba' },
    { id: 11, title: 'About', collegeName:'kasturba medical' },
    { id: 11, title: 'About', collegeName:'kasturba medical college' },
    { id: 11, title: 'About', collegeName:'kasturba medical college,manipal' },

    //St. Johns Medical College
    { id: 12, title: 'About', collegeName:'st. johns medical college,bangalore' },
    { id: 12, title: 'About', collegeName:'st. johns' },
    { id: 12, title: 'About', collegeName:'st. johns medical' },
    { id: 12, title: 'About', collegeName:'st. johns medical college' },
    

    //JSS Medical College – Mysore
    { id: 13, title: 'About', collegeName:'jss medical college' },
    { id: 13, title: 'About', collegeName:'jss medical' },
    

    //Kasturba Medical College – Mangaluru
    { id: 14, title: 'About', collegeName:'kasturba medical college,mangaluru' },
    { id: 14, title: 'About', collegeName:'kasturba' },
    { id: 14, title: 'About', collegeName:'kasturba medical' },
    { id: 14, title: 'About', collegeName:'kasturba medical college' },
    { id: 14, title: 'About', collegeName:'kasturba college' },

    //M. S. Ramaiah Medical College – Bangaluru
    { id: 17, title: 'About', collegeName:'M.S. ramaiah medical college,bangaluru'},
    { id: 17, title: 'About', collegeName:'m.s. ramaiah medical college,bangaluru'},
    { id: 17, title: 'About', collegeName:'m.s. ramaiah'},
    { id: 17, title: 'About', collegeName:'m.s. ramaiah medical'},
    { id: 17, title: 'About', collegeName:'m.s. ramaiah medical college'},
    

    //K. S. Hegde Medical Academy – Mangaluru
    { id: 16, title: 'About', collegeName:'k.s. hegde medical academy,mangaluru' },
    { id: 16, title: 'About', collegeName:'k.s. medical academy,mangaluru' },
    { id: 16, title: 'About', collegeName:'k.s. hegde' },
    { id: 16, title: 'About', collegeName:'k.s. hegde medical' },
    { id: 16, title: 'About', collegeName:'k.s. hegde medical academy' },
    { id: 16, title: 'About', collegeName:'k.s. hegde medical college' },



    //Bangalore Medical College & research Institute

    //Dr. Ambedkar Medical College
    { id: 22, title: 'About', collegeName:'dr. ambedkar medical college' },
    { id: 22, title: 'About', collegeName:'dr. ambedkar' },
    { id: 22, title: 'About', collegeName:'dr. ambedkar medical' },
    { id: 22, title: 'About', collegeName:'dr. ambedkar medical college' },
    

    //Rajarajeshwari medical college & hospital
    { id: 23, title: 'About', collegeName:'rajarajeshwari medical college & hospital' },
    { id: 23, title: 'About', collegeName:'rajarajeshwari' },
    { id: 23, title: 'About', collegeName:'rajarajeshwari medical' },
    { id: 23, title: 'About', collegeName:'rajarajeshwari medical college' },
    { id: 23, title: 'About', collegeName:'rajarajeshwari medical college and hospital' },
   

    //Sapthagiri Institute of Medical Science and Research Centre
    { id: 24, title: 'About', collegeName:'sapthagiri institute of medical science and research centre' },
    { id: 24, title: 'About', collegeName:'sapthagiri' },
    { id: 24, title: 'About', collegeName:'sapthagiri institute' },
    { id: 24, title: 'About', collegeName:'sapthagiri institute of medical' },
    { id: 24, title: 'About', collegeName:'sapthagiri institute of medical science' },
    { id: 24, title: 'About', collegeName:'sapthagiri institute of medical science and research' },

    //Recommended Medical Colleges for You
    { id: 27, title: 'About', collegeName:'M. S. Ramaiah Medical College' },
    { id: 28, title: 'About', collegeName:'BGS Global Institute of Medical Sciences' },
    { id: 29, title: 'About', collegeName:'Vydehi Institute of Medical Sciences and Research Centre' },
    { id: 30, title: 'About', collegeName:'Kempegowda institute of medical science' },
    { id: 31, title: 'About', collegeName:'Dr.Ambedkar Medical College' },
    { id: 32, title: 'About', collegeName:'Jagadguru Jayadeva Murugarajendra Medical College (JJMMC) -Davangere' },
    { id: 33, title: 'About', collegeName:'S S Institute of Medical Sciences & Research Centre – Davangere' },
    { id: 34, title: 'About', collegeName:'Al-ameen Medical College' },

    //East Point institute of medical science
    { id: 25, title: 'About', collegeName:'east point institute of medical science' },
    { id: 25, title: 'About', collegeName:'east point' },
    { id: 25, title: 'About', collegeName:'east point institute' },
    { id: 25, title: 'About', collegeName:'east point institute of medical' },
    { id: 25, title: 'About', collegeName:'east' },
    

    //Akash Medical College
    { id: 26, title: 'About', collegeName:'akash medical college' },
    { id: 26, title: 'About', collegeName:'akash medical college,banglore' },
    { id: 26, title: 'About', collegeName:'akash medical' },
    { id: 26, title: 'About', collegeName:'akash' },


    //M. S. Ramaiah Medical College
    { id: 27, title: 'About', collegeName:'m.s. Ramaiah Medical College' },
    { id: 27, title: 'About', collegeName:'m.s. ramaiah medical college' },
    { id: 27, title: 'About', collegeName:'m.s. ramaiah medical' },
    { id: 27, title: 'About', collegeName:'ramaiah medical college' },
    { id: 27, title: 'About', collegeName:'ramaiah medical' },
    { id: 27, title: 'About', collegeName:'ramaiah medical college' },
    { id: 27, title: 'About', collegeName:'ramaiah medical college,banglore' },


    //BGS Global Institute of Medical Sciences
    { id: 28, title: 'About', collegeName:'BGS' },
    { id: 28, title: 'About', collegeName:'bgs' },
    { id: 28, title: 'About', collegeName:'bgs global institude of medical' },
    { id: 28, title: 'About', collegeName:'bgs global institude' },
    { id: 28, title: 'About', collegeName:'bgs global institude of medical science' },

    //Vydehi Institute of Medical Sciences and Research Centre
    { id: 29, title: 'About', collegeName:'vydehi institute of medical sciences and research centre' },
    { id: 29, title: 'About', collegeName:'vydehi' },
    { id: 29, title: 'About', collegeName:'vydehi institute' },
    { id: 29, title: 'About', collegeName:'vydehi institute of medical' },
    { id: 29, title: 'About', collegeName:'vydehi institute of medical sciences' },
    { id: 29, title: 'About', collegeName:'vydehi institute of medical sciences and research' },
    { id: 29, title: 'About', collegeName:'vydehi medical sciences and research' },

    //Kempegowda institute of medical science
    { id: 30, title: 'About', collegeName:'kempegowda institute of medical science' },
    { id: 30, title: 'About', collegeName:'kempegowda' },
    { id: 30, title: 'About', collegeName:'kempegowda institute' },
    { id: 30, title: 'About', collegeName:'kempegowda institute of medical' },
    { id: 30, title: 'About', collegeName:'kempegowda institute of medical science' },

    //Dr.Ambedkar Medical College
    { id: 31, title: 'About', collegeName:'dr.ambedkar medical college' },
    { id: 31, title: 'About', collegeName:'dr. ambedkar' },
    { id: 31, title: 'About', collegeName:'dr. ambedkar medical' },
    { id: 31, title: 'About', collegeName:'dr.ambedkar medical college' },

   
    //Jagadguru Jayadeva Murugarajendra Medical College (JJMMC) -Davangere
    { id: 32, title: 'About', collegeName:'jagadguru jayadeva murugarajendra medical college (JJMMC)-davangere' },
    { id: 32, title: 'About', collegeName:'jagadguru' },
    { id: 32, title: 'About', collegeName:'jagadguru jayadeva' },
    { id: 32, title: 'About', collegeName:'jagadguru jayadeva murugarajendra' },
    { id: 32, title: 'About', collegeName:'jagadguru jayadeva murugarajendra medical' },
    { id: 32, title: 'About', collegeName:'jagadguru jayadeva murugarajendra medical college' },
    { id: 32, title: 'About', collegeName:'jjmc college davangere' },
    { id: 32, title: 'About', collegeName:'davangere' },



    //S S Institute of Medical Sciences & Research Centre – Davangere
    { id: 33, title: 'About', collegeName:'s s institute of medical sciences & research centre – davangere' },
    { id: 33, title: 'About', collegeName:'s s institute' },
    { id: 33, title: 'About', collegeName:'s s institute of medical' },
    { id: 33, title: 'About', collegeName:'s s institute of medical sciences' },
    { id: 33, title: 'About', collegeName:'s s institute of medical sciences & research' },
    { id: 33, title: 'About', collegeName:'s s institute of medical sciences & research centre' },

    //Al-ameen Medical College
    { id: 34, title: 'About', collegeName:'Al-ameen Medical College' },
    { id: 34, title: 'About', collegeName:'Al-Ameen Medical College' },
    { id: 34, title: 'About', collegeName:'al-ameen medical college' },
    { id: 34, title: 'About', collegeName:'al-ameen' },
    { id: 34, title: 'About', collegeName:'medical college' },
    { id: 34, title: 'About', collegeName:'al-ameen medical' },

     //Father Muller Medical College
    { id: 35, title: 'About', collegeName:'Father Muller Medical College' },
    { id: 35, title: 'About', collegeName:'Father' },
    { id: 35, title: 'About', collegeName:'Father Muller' },
    { id: 35, title: 'About', collegeName:'Father Muller Medical' },
    { id: 35, title: 'About', collegeName:'Father Muler Medical' },
    { id: 35, title: 'About', collegeName:'father muller medical' },
    { id: 35, title: 'About', collegeName:'muller medical' },
    { id: 35, title: 'About', collegeName:'father' },



    
    
  
  ]
 
    
  