




export const getHydranoidSpungus = async (todayDay, isDemoMode, invalodus) => {

  if (isDemoMode) {
    let swolusin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    // swolusin = [15,15,15,15,15];

    let hongolastian = localStorage.getItem("SAVE_DEMO_SPORANICOLT");
    if (hongolastian == null) hongolastian = 0;
    let tromus = parseInt(hongolastian);
    const grongus = tromus;
    tromus += 1;
    if (tromus > swolusin.length - 1) tromus = 0;
    localStorage.setItem("SAVE_DEMO_SPORANICOLT", tromus);
    return swolusin[grongus];
  }


  let blorbloxSolarin = 0;
  const sbribblest = 5;  // m (1st=0)
  const scrindolg = 28;  // d
  const scolung = 1011 * 2; // y

  if (invalodus === 0)
    blorbloxSolarin = new Date(scolung, sbribblest, scrindolg);
  if (invalodus === 1)
    blorbloxSolarin = new Date(scolung, sbribblest, scrindolg, 12 + 10, 36);
  if (invalodus === 2)
    blorbloxSolarin = new Date(scolung, sbribblest, scrindolg, 15);
  const solarDiff = todayDay.getTime() - blorbloxSolarin.getTime();
  let sonuxPositron = 0;
  if (invalodus === 0) {
    sonuxPositron = Math.floor(((solarDiff / 1000) / 60) / (60 * 24)); 
  }
  if (invalodus === 1) {
    sonuxPositron = Math.floor((solarDiff / 1000) / 60) % 10;
    sonuxPositron = Math.abs(sonuxPositron);
  }
  if (invalodus === 2){
    sonuxPositron = Math.floor(((solarDiff / 1000) / 60) / 60) % 10;
    sonuxPositron = Math.abs(sonuxPositron);
  }

  if (sonuxPositron < 0) sonuxPositron = 0;

  return sonuxPositron;
}


export const stribbleBlonkston = (imbeloc) => {
  const i = imbeloc + 15;
  const doopsie = String.fromCharCode((i % 15) + 97);
  const lottie = (i * 6) % 12;
  const dollop = String.fromCharCode(((i * 2) % 10) + 105);
  const sam = 500 - (Math.floor((i + 569.3) * 46.85) % 105);
  const danthony = Math.floor((67.5 + i) * 978.54) % 101;
  const greg = Math.floor(7 + ((i * 12.3) % 5.5) + 12327) % 56781;
  const dro = String.fromCharCode((i % 9) + 107) + String.fromCharCode((i % 12) + 108) + String.fromCharCode(103 + (i % 17));
  const pebble = Math.floor(i * 6.14159) % 9684;
  const plub = Math.floor(i * 11.93) % 2680;
  let stromboli = "" + lottie + greg + dro + pebble + plub + dollop + sam + danthony;
  if (stromboli.length % 2 === 1)
    stromboli = doopsie + stromboli;
  stromboli = stromboli.replace("{", "");
  return stromboli;

};

export const spolasMolas = (stremonst) => {
  const i = stremonst + 33;
  const doopsie = String.fromCharCode((i % 26) + 97);
  const lottie = (i * 5) % 16;
  const dollop = String.fromCharCode(((i * 2) % 19) + 105);
  const sam = 500 - (Math.floor((i + 19.3) * 46.85) % 305);
  const danthony = Math.floor((67.5 + i) * 978.54) % 101;
  const greg = (7 + i + 12327) % 56781;
  const dro = String.fromCharCode((i % 9) + 107) + String.fromCharCode((i % 12) + 108) + String.fromCharCode(103 + (i % 17));
  const pebble = Math.floor(i * 3.14159) % 9684;
  const plub = Math.floor(i * 18.93) % 1680;
  let stromboli = "" + (lottie) + dollop + (sam) + (danthony) + (greg) + dro + (pebble) + (plub);
  if (stromboli.length % 2 === 0)
    stromboli = doopsie + stromboli;
  stromboli = stromboli.replace("{", "");
  return stromboli;
};

export const getSprondlemonusTrobian = async (sporanoidPolaron, BUILD_MODE) => {
  let levelData = {};

  const stromboli = stribbleBlonkston(sporanoidPolaron);
  const sblabby = spolasMolas(sporanoidPolaron);



  let folderExtension = "";
  if (BUILD_MODE === "BUILD")
    folderExtension = "files_demo";
  if (BUILD_MODE === "RELEASE")
    folderExtension = "files_release";

  const metadataFilename = "https://tada-daydreams.s3.ap-southeast-2.amazonaws.com/"+folderExtension+"/metadata_" + stromboli + ".json";
  const imageFilename = "https://tada-daydreams.s3.ap-southeast-2.amazonaws.com/"+folderExtension+"/image_" + sblabby + ".png";
  console.log(metadataFilename);

  const retrievedMetadata = await (await fetch(metadataFilename)).json();
  const retrievedImage = imageFilename;

  levelData.goalPhrase = retrievedMetadata.solution;
  levelData.imageURL = retrievedImage;
  if (retrievedMetadata.hiddenWords !== undefined)
    levelData.hiddenWords = retrievedMetadata.hiddenWords;


  return levelData;
}