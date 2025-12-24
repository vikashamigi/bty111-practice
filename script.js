const quiz = [
  { q:"1. Biotechnology is best defined as:", o:["Study of plants","Use of organisms for human welfare","Study of genetics only","Study of microbes"], a:1 },
  { q:"2. Who coined the term biotechnology?", o:["Watson","Karl Ereky","Mendel","Pasteur"], a:1 },
  { q:"3. Which is the oldest form of biotechnology?", o:["Genetic engineering","Tissue culture","Fermentation","Cloning"], a:2 },
  { q:"4. Bread making is an example of:", o:["Modern biotechnology","Medical biotechnology","Traditional biotechnology","Molecular biotechnology"], a:2 },
  { q:"5. Which organism is used in curd formation?", o:["Yeast","Lactobacillus","E. coli","Rhizobium"], a:1 },
  { q:"6. Biotechnology mainly combines:", o:["Physics and chemistry","Biology and technology","Botany and zoology","Genetics and math"], a:1 },
  { q:"7. Which product is NOT biotechnological?", o:["Insulin","Vaccine","Plastic","Antibiotic"], a:2 },

  { q:"8. Cell is the basic unit of:", o:["Tissue","Organ","Life","System"], a:2 },
  { q:"9. Prokaryotic cells lack:", o:["Ribosomes","Cell membrane","Nucleus","Cytoplasm"], a:2 },
  { q:"10. Which organelle produces ATP?", o:["Ribosome","Golgi body","Mitochondria","Lysosome"], a:2 },
  { q:"11. Plant cells differ from animal cells by presence of:", o:["Mitochondria","Ribosomes","Cell wall","Cytoplasm"], a:2 },
  { q:"12. Ribosomes are involved in:", o:["Respiration","Protein synthesis","Lipid synthesis","Digestion"], a:1 },
  { q:"13. Lysosomes are known as:", o:["Powerhouse","Suicide bags","Transport system","Control center"], a:1 },
  { q:"14. Endoplasmic reticulum is involved in:", o:["Protein transport","Respiration","Digestion","DNA replication"], a:0 },

  { q:"15. DNA stands for:", o:["Deoxyribo nucleic acid","Deoxyribose nitrogen acid","Double nitrogen acid","Dynamic nucleic acid"], a:0 },
  { q:"16. RNA differs from DNA by having:", o:["Thymine","Double strand","Uracil","Deoxyribose"], a:2 },
  { q:"17. Structure of DNA was proposed by:", o:["Darwin","Mendel","Watson and Crick","Franklin"], a:2 },
  { q:"18. Hydrogen bonds occur between:", o:["Sugar-phosphate","Base pairs","Phosphates","Sugars"], a:1 },
  { q:"19. Which base pairs with Adenine in DNA?", o:["Cytosine","Guanine","Thymine","Uracil"], a:2 },
  { q:"20. Genetic information is stored in:", o:["RNA","Protein","DNA","Lipid"], a:2 },
  { q:"21. DNA replication is:", o:["Conservative","Semi-conservative","Dispersive","Random"], a:1 },

  { q:"22. Gene is a unit of:", o:["Protein","Cell","Heredity","Metabolism"], a:2 },
  { q:"23. Mendel worked on:", o:["Wheat","Pea plant","Rice","Maize"], a:1 },
  { q:"24. Phenotype refers to:", o:["Genetic makeup","Physical appearance","DNA sequence","Chromosome number"], a:1 },
  { q:"25. Genotype refers to:", o:["Appearance","Behavior","Genetic constitution","Mutation"], a:2 },
  { q:"26. Homozygous means:", o:["Different alleles","Same alleles","No alleles","Mutated alleles"], a:1 },
  { q:"27. Test cross is done with:", o:["Dominant parent","Recessive parent","Hybrid","Mutant"], a:1 },
  { q:"28. Mendel’s laws are based on:", o:["Mitosis","Meiosis","Fertilization","Mutation"], a:1 },

  { q:"29. Enzymes are:", o:["Lipids","Carbohydrates","Proteins","Vitamins"], a:2 },
  { q:"30. Enzyme specificity is due to:", o:["Temperature","pH","Active site","Cofactor"], a:2 },
  { q:"31. Lock and key model was proposed by:", o:["Fischer","Watson","Koshland","Mendel"], a:0 },
  { q:"32. Enzyme activity is highest at:", o:["Any pH","Optimum pH","Neutral pH","Acidic pH only"], a:1 },
  { q:"33. Which affects enzyme activity?", o:["Temperature","pH","Substrate concentration","All of the above"], a:3 },
  { q:"34. Denaturation leads to loss of:", o:["Structure","Function","Both A and B","None"], a:2 },
  { q:"35. Coenzymes are usually:", o:["Proteins","Lipids","Organic molecules","Minerals"], a:2 },

  { q:"36. Fermentation is:", o:["Aerobic","Anaerobic","Photosynthetic","Synthetic"], a:1 },
  { q:"37. Yeast converts sugar into:", o:["Lactic acid","Alcohol","Acetic acid","Methane"], a:1 },
  { q:"38. Industrial fermentation uses:", o:["Flask","Test tube","Fermenter","Petri dish"], a:2 },
  { q:"39. Antibiotics are produced by:", o:["Virus","Algae","Bacteria and fungi","Plants"], a:2 },
  { q:"40. Penicillin was discovered by:", o:["Pasteur","Fleming","Ehrlich","Jenner"], a:1 },

  { q:"41. Tissue culture requires:", o:["Soil","Nutrient medium","Sand","Compost"], a:1 },
  { q:"42. Explant refers to:", o:["Whole plant","Cultured tissue","Plant hormone","Medium"], a:1 },
  { q:"43. Auxins help in:", o:["Root formation","Photosynthesis","Respiration","Germination"], a:0 },
  { q:"44. Callus is:", o:["Root","Shoot","Undifferentiated mass","Seed"], a:2 },
  { q:"45. Totipotency means:", o:["One function","Limited growth","Ability to form whole plant","Cell death"], a:2 },

  { q:"46. Recombinant DNA technology involves:", o:["RNA synthesis","DNA cutting and joining","Protein folding","Fermentation"], a:1 },
  { q:"47. Restriction enzymes act as:", o:["Ligases","Scissors","Glue","Polymerase"], a:1 },
  { q:"48. Plasmids are found in:", o:["Virus","Eukaryotes","Bacteria","Plants"], a:2 },
  { q:"49. DNA ligase helps in:", o:["Cutting DNA","Replication","Joining DNA","Transcription"], a:2 },
  { q:"50. PCR amplifies:", o:["RNA","Protein","DNA","Lipid"], a:2 },

  { q:"51. GM crops are developed using:", o:["Hybridization","Mutation","Genetic engineering","Selection"], a:2 },
  { q:"52. Bt cotton is resistant to:", o:["Virus","Fungus","Insects","Weeds"], a:2 },
  { q:"53. Golden rice is rich in:", o:["Vitamin A","Vitamin B","Vitamin C","Vitamin D"], a:0 },

  { q:"54. Vaccine provides:", o:["Treatment","Immunity","Nutrition","Energy"], a:1 },
  { q:"55. Antibodies are:", o:["Lipids","Proteins","Sugars","Vitamins"], a:1 },

  { q:"56. Bioinformatics deals with:", o:["Biology + computers","Biology + physics","Biology + math","Biology + chemistry"], a:0 },
  { q:"57. DNA sequencing determines:", o:["Protein structure","Base order","Cell type","Enzyme action"], a:1 },
  { q:"58. GenBank is a:", o:["Laboratory","Database","Enzyme","Vector"], a:1 },

  { q:"59. Biosafety relates to:", o:["Ethics","Environment","Safe handling","Genetics"], a:2 },
  { q:"60. Bioethics deals with:", o:["Profit","Moral issues","Growth","Speed"], a:1 },

  { q:"61. Environmental biotechnology helps in:", o:["Pollution","Waste treatment","Climate change only","Mining"], a:1 },
  { q:"62. Bioremediation uses:", o:["Chemicals","Microorganisms","Radiation","Plastics"], a:1 },

  { q:"63. Biotechnology improves:", o:["Health","Agriculture","Industry","All of the above"], a:3 },
  { q:"64. PCR stands for:", o:["Polymerase Chain Reaction","Protein Chain Reaction","Polymer Chain Replication","Protein Copy Reaction"], a:0 },
  { q:"65. Cloning produces:", o:["Different organism","Identical copy","Hybrid","Mutant"], a:1 },
  { q:"66. Stem cells are:", o:["Specialized","Undifferentiated","Dead cells","Mutated"], a:1 },
  { q:"67. Gene therapy aims to:", o:["Remove genes","Replace faulty genes","Add proteins","Stop mutation"], a:1 },
  { q:"68. DNA fingerprinting is used in:", o:["Agriculture","Crime investigation","Nutrition","Industry"], a:1 },
  { q:"69. Biotechnology has maximum impact on:", o:["Past","Present","Future","None"], a:2 },

  { q:"70. Biogas contains mainly:", o:["Oxygen","Nitrogen","Methane","Hydrogen"], a:2 }
];
{ q:"71. Batch culture means:", o:["Continuous feeding","Closed system","Open system","Sterile-free system"], a:1 },
  { q:"72. Primary metabolites are produced during:", o:["Death phase","Lag phase","Log phase","Stationary phase"], a:2 },

  { q:"73. Sterilization in tissue culture prevents:", o:["Growth","Contamination","Mutation","Respiration"], a:1 },
  { q:"74. Micropropagation is used for:", o:["Mutation","Rapid multiplication","Hybridization","Fertilization"], a:1 },

  { q:"75. Vector in genetic engineering is used to:", o:["Cut DNA","Carry gene","Destroy DNA","Sequence DNA"], a:1 },
  { q:"76. Taq polymerase is obtained from:", o:["E. coli","Virus","Thermus aquaticus","Yeast"], a:2 },

  { q:"77. Transgenic organisms contain:", o:["Same genes","Mutated genes","Foreign genes","Deleted genes"], a:2 },
  { q:"78. Agrobacterium is used as:", o:["Pathogen","Vector","Enzyme","Fertilizer"], a:1 },
  { q:"79. Biofertilizers improve:", o:["Pollution","Soil fertility","Toxicity","Acidity"], a:1 },
  { q:"80. Bio pesticides are:", o:["Harmful","Synthetic","Eco-friendly","Radioactive"], a:2 },

  { q:"81. Recombinant insulin is produced using:", o:["Virus","Yeast","Bacteria","All of the above"], a:3 },
  { q:"82. ELISA is used for:", o:["DNA cutting","Disease diagnosis","Cloning","Fermentation"], a:1 },
  { q:"83. Antibiotics work against:", o:["Virus","Bacteria","Cancer","Allergy"], a:1 },

  { q:"84. BLAST is used for:", o:["Cutting DNA","Sequence comparison","PCR","Translation"], a:1 },
  { q:"85. Proteomics studies:", o:["Genes","RNA","Proteins","Lipids"], a:2 },
  { q:"86. Genome refers to:", o:["Single gene","RNA","Complete DNA","Protein"], a:2 },

  { q:"87. GMO release requires:", o:["Approval","Ban","No control","Mutation"], a:0 },
  { q:"88. Intellectual property protects:", o:["Ideas","Innovations","Data only","Microbes"], a:1 },
  { q:"89. Patent gives:", o:["Ownership","Copying rights","Public access","Free use"], a:0 },

  { q:"90. Biosafety levels range from:", o:["1–4","1–2","2–5","3–6"], a:0 },

  { q:"91. Sewage treatment uses:", o:["Viruses","Algae","Bacteria","Plants"], a:2 },
  { q:"92. Activated sludge contains:", o:["Dead cells","Living microbes","Chemicals","Plastics"], a:1 },
  { q:"93. Composting is:", o:["Chemical process","Biological process","Physical process","Nuclear process"], a:1 },

  { q:"94. Waste to energy is an example of:", o:["Medical biotech","Industrial biotech","Environmental biotech","Agricultural biotech"], a:2 },

  { q:"95. Biofuel example is:", o:["Petrol","Diesel","Ethanol","Kerosene"], a:2 },

  { q:"96. Vaccine works by providing:", o:["Nutrition","Immunity","Energy","Treatment"], a:1 },

  { q:"97. Monoclonal antibodies are produced by:", o:["Bacteria","Hybridoma","Virus","Plants"], a:1 },

  { q:"98. Insulin is used to treat:", o:["Cancer","Diabetes","Tuberculosis","Asthma"], a:1 },

  { q:"99. Gene therapy is an example of:", o:["Environmental biotech","Medical biotech","Industrial biotech","Agricultural biotech"], a:1 },

  { q:"100. Biotechnology is a multidisciplinary science involving:", o:["Biology only","Technology only","Biology and technology","Chemistry only"], a:2 }
