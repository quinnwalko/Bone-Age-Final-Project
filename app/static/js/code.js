const firstVisual = "intro"; 
const firstPatient = "0"

function buildIntro() {
  // Use `.html("") to clear any existing data
  d3.select("#visualizations").html("");

  d3.select("#visualizations")
    .append("div")
    .attr("id", "intro")
  d3.select("#intro")
    .append("p")
    .attr("id", "intro-text-1")
    .text("Despite the possibility of prevention with regular screening, cervical cancer remains a significant cause of mortality in low-income countries, attributable in part to limited access and low adherence to routine cervical cancer screenings.")
  d3.select("#intro")
    .append("p")
    .attr("id", "intro-text-2")
    .text("Even for patients who adhere to regular screening practices, proper diagnosis depends heavily on a doctor's training and expertise. With the advent of digital colposcopies, scientists are using machine learning techniques to analyze video from digital colposcopy to improve diagnostics and reduce human error.")
  d3.select("#intro")
    .append("p")
    .attr("id", "intro-text-3")
    .html(`We used the <a href="https://archive.ics.uci.edu/ml/datasets/Cervical+cancer+%28Risk+Factors%29">data</a> from one of these studies, which was generously donated to the <a href="https://archive.ics.uci.edu/ml/index.php">UCI Machine Learning Repository</a>. The data was collected at Hospital Universitario de Caracas in Venezuela and consists of demographic information, habits, and historic medical records from 858 women.`)
  d3.select("#intro")
    .append("p")
    .attr("id", "intro-text-4")
    .text(`We used this data to build a machine learning model to predict whether a person is at high or low risk of cervical cancer, which could be deployed as part of a medical app. While the dataset has significant weaknesses, our project demonstrates how this technology developed with more robust data can play a critical role in targeting high risk populations for cervical cancer screening programs and reducing the disease’s incidence and death rates.`)
  d3.select("#intro")
    .append("p")
    .attr("id", "intro-text-5")
    .text("Use the buttons above to view the raw data set, see individual patient data, see metadata on our sample population, learn how we developed our model, and explore the model by entering your own sample data.")
  console.log("Intro build complete.")
}

// function buildRawData() {
//     console.log("Raw data table build complete.")
//     d3.select("#visualizations")
//       .append("div")
//       .attr("id", "table")
//     d3.select("#table")
//       .append("h1")
//       .attr("class", "display-4")
//       .text("If we had gotten to it,")
//     d3.select("#table")
//       .append("h1")
//       .attr("class", "display-4")
//       .text("a table would have gone here.")
//     d3.select("#table")
//       .append("h1")
//       .attr("class", "display-4")
//       .text("Raw data in console log for now.")
//     d3.json(`/raw-data`, function(rawData) {
//       console.log(rawData);
//     });
// }
  
function buildPatientData(patientKey) {
  d3.select("#visualizations")
    .html("")
    .append("div")
    .attr("id", "patient-data")
    .attr("class", "container")
  d3.select("#patient-data")
    .html("")
    .text("Select a patient: ")
    .append("select")
    .attr("id", "select-patient")
    .attr("onchange", "patientChanged(this.value)")

  // build patient title
  d3.select("#patient-data")
    .append("div")
    .attr("id", "patient-number")
    .attr("class", "container")
    .append("h4")
    .attr("class", "display-4")
    .text(`Patient ${patientKey}`)
  
  // build row 1
  d3.select("#patient-data")
    .append("div")
    .attr("id", "patient-data-row-1")
    .attr("class", "row")
  d3.select("#patient-data-row-1")
    .append("div")
    .attr("id", "age-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("Age")
  d3.select("#patient-data-row-1")
    .append("div")
    .attr("id", "intercourse-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("Age Sexually Active")
  d3.select("#patient-data-row-1")
    .append("div")
    .attr("id", "sex-partners-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("# of Sexual Partners")
  d3.select("#patient-data-row-1")
    .append("div")
    .attr("id", "pregnancies-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("# of Pregnancies")

  // build row 2
  d3.select("#patient-data")
    .append("div")
    .attr("id", "patient-data-row-2")
    .attr("class", "row")
  d3.select("#patient-data-row-2")
    .append("div")
    .attr("id", "smokes-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("Smokes")
  d3.select("#patient-data-row-2")
    .append("div")
    .attr("id", "hbc-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("Birth Control")
  d3.select("#patient-data-row-2")
    .append("div")
    .attr("id", "iud-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("IUD")
  d3.select("#patient-data-row-2")
    .append("div")
    .attr("id", "std-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("STDs")

  // build row 3
  d3.select("#patient-data")
    .append("div")
    .attr("id", "patient-data-row-3")
    .attr("class", "row")
  d3.select("#patient-data-row-3")
    .append("div")
    .attr("id", "hpv-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("HPV")
  d3.select("#patient-data-row-3")
    .append("div")
    .attr("id", "cin-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("Cervical Dysplasia")
  d3.select("#patient-data-row-3")
    .append("div")
    .attr("id", "cancer-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("Cancer")
  d3.select("#patient-data-row-3")
    .append("div")
    .attr("id", "risk-col")
    .attr("class", "card col-md-3")
    .append("div")
    .attr("class", "card-header")
    .append("h6").text("Risk Level")

  // Seed selector with patient IDs
  d3.json(`/patient-data`, function(patientData) {
    // log data
    console.log(patientData);
    Object.keys(patientData).forEach(function(patientKey) {
      d3.select("#select-patient")
        .append("option")
        .attr("value", `${patientKey}`)
        .text(`Patient ${patientKey}`)
    });

    keys = Object.keys(patientData[patientKey])
    entries = Object.entries(patientData[patientKey])
    // log selected patient data
    console.log(Object.entries(patientData[patientKey]))

    // age
    d3.select("#age-col")
      .append("h4")
      .attr("class", "display-2")
      .text(`${entries[0][1]}`)
    // age at first intercourse
    d3.select("#intercourse-col")
      .append("h4")
      .attr("class", "display-2")
      .text(`${entries[5][1]}`)
    // number of sexual partners
    d3.select("#sex-partners-col")
      .append("h4")
      .attr("class", "display-2")
      .text(`${entries[9][1]}`)
    // number of pregnancies
    d3.select("#pregnancies-col")
      .append("h4")
      .attr("class", "display-2")
      .text(`${entries[8][1]}`)
    
    // enter data into row 2
    // smokes?
    if (entries[11][1] == 1) {
      d3.select("#smokes-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/green-check.png")
    }
    else {
      d3.select("#smokes-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/red-x.png")
    }

    // hormonal birth control?
    if (entries[6][1] == 1) {
      d3.select("#hbc-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/green-check.png")
    }
    else {
      d3.select("#hbc-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/red-x.png")
    }

    // iud?
    if (entries[7][1] == 1) {
      d3.select("#iud-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/green-check.png")
    }
    else {
      d3.select("#iud-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/red-x.png")
    }

    // stds?
    if (entries[10][1] == 1) {
      d3.select("#std-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/green-check.png")
    }
    else {
      d3.select("#std-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/red-x.png")
    }
    
    // hpv diagnosis
    if (entries[4][1] == 1) {
      d3.select("#hpv-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/green-check.png")
    }
    else {
      d3.select("#hpv-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/red-x.png")
    }
    
    // cin diagnosis
    if (entries[2][1] == 1) {
      d3.select("#cin-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/green-check.png")
    }
    else {
      d3.select("#cin-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/red-x.png")
    }

    // cancer diagnosis
    if (entries[3][1] == 1) {
      d3.select("#cancer-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/green-check.png")
    }
    else {
      d3.select("#cancer-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/red-x.png")
    }
    // risk?
    if (entries[13][1] == 1) {
      d3.select("#risk-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/high.png")
    }
    else {
      d3.select("#risk-col")
        .append("img")
        .attr("class", "img-fluid")  
        .attr("src", "../static/images/low.png")
    }
  });

  console.log("Patient data build complete.")
}
  
function buildVisualizations() {
  console.log("Visualizations build complete.")
  // append a container for our visuals to the content section of the index page
  d3.select("#visualizations")
    .append("div")
    .attr("id", "visuals")
    .attr("class", "container")
  //append 1st row to our visuals container
  d3.select("#visuals")   
    .append("div")
    .attr("class", "row justify-content-around")
    .attr("id", "visuals-row-1")
  // append a col-md-3 for pie charts to our 1st row
  d3.select("#visuals-row-1")
    .append("div")
    .attr("id", "pie-col")
    .attr("class", "col-md-3")
  // append a col-md-8 for histograms to our 1st row
  d3.select("#visuals-row-1")
    .append("div")
    .attr("id", "histograms")
    .attr("class", "col-md-8")

  // append age histogram
  d3.select("#histograms")
    .append("div")
    .attr("id", "age-histo-row")
    .attr("class", "row")
  d3.select("#age-histo-row")
    .append("figure")
    .append("img")
    .attr("src", "../static/images/age-histogram.png")
    .attr("class", "img-fluid")
  d3.select("#age-histo-row")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "age-histo-desc")
    .html(`<strong>Patient Age Distribution:</strong> The women in this population ranged in age from 13-84, with the majority falling between 20-32 years old and the average age being 27.`)
  // append sexual partners histogram
  d3.select("#histograms")
    .append("div")
    .attr("id", "sexual-partners-histo-row")
    .attr("class", "row")
  d3.select("#sexual-partners-histo-row")
    .append("figure")
    .append("img")
    .attr("src", "../static/images/sexual-partners-histo.png")
    .attr("class", "img-fluid")
  d3.select("#sexual-partners-histo-row")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "sex-partners-histo-desc")
    .html(`<strong>Number of Sexual Partners:</strong> All of the women in this dataset were sexually active with the number of partners ranging from 1-28 and the majority having had 2-3 partners.`)
  // append age at first intercourse histogram
  d3.select("#histograms")
    .append("div")
    .attr("id", "intercourse-age-histo-row")
    .attr("class", "row")
  d3.select("#intercourse-age-histo-row")
    .append("figure")
    .append("img")
    .attr("src", "../static/images/age-first-intercourse-histo.png")
    .attr("class", "img-fluid")
  d3.select("#intercourse-age-histo-row")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "inter-age-histo-desc")
    .html(`<strong>Age Sexually Active:</strong> Women in this dataset became sexually active between the ages of 10-32, with the majority becoming sexually active between ages 15-18 at an average of 17 years old.`)
  // append number of pregnancies histogram
  d3.select("#histograms")
    .append("div")
    .attr("id", "number-of-pregnancies-histo-row")
    .attr("class", "row")
  d3.select("#number-of-pregnancies-histo-row")
    .append("figure")
    .append("img")
    .attr("src", "../static/images/number-of-pregnancies-histo.png")
    .attr("class", "img-fluid")
  d3.select("#number-of-pregnancies-histo-row")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "preg-histo-desc")
    .html(`<strong>Number of Pregnancies:</strong> These patients had a number of pregnancies ranging from 0-11 with the majority of women having had 1-3 pregnancies.`)
  // append hbc chart to pie col
  d3.select("#pie-col")
    .append("div")
    .attr("id", "hbc-pie-row")
    .attr("class", "row")
  d3.select("#hbc-pie-row")
    .append("figure")
    .append("img")
    .attr("src", "../static/images/hbc-small.png")
    .attr("class", "img-fluid")
  d3.select("#hbc-pie-row")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "hbc-pie-desc")
    .html(`<strong>Hormonal Birth Control:</strong> Slightly more than half of subjects had taken some form of hormonal contraceptive.`)
  // append iud chart to pie col
  d3.select("#pie-col")
    .append("div")
    .attr("id", "iud-pie-row")
    .attr("class", "row")
  d3.select("#iud-pie-row")
    .append("figure")
    .append("img")
    .attr("src", "../static/images/iud-small.png")
    .attr("class", "img-fluid")
  d3.select("#iud-pie-row")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "iud-pie-desc")
    .html(`<strong>IUDs:</strong> Less than one in ten subjects had used an IUD.`)
  // append std chart to pie col
  d3.select("#pie-col")
    .append("div")
    .attr("id", "std-pie-row")
    .attr("class", "row")
  d3.select("#std-pie-row")
    .append("figure")
    .append("img")
    .attr("src", "../static/images/std-small.png")
    .attr("class", "img-fluid")
  d3.select("#std-pie-row")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "std-pie-desc")
    .html(`<strong>STDs:</strong> Less than one in ten subjects had been previously diagnosed with an STD.`)
  // append smokers chart to pie col
  d3.select("#pie-col")
    .append("div")
    .attr("id", "smoker-pie-row")
    .attr("class", "row")
  d3.select("#smoker-pie-row")
    .append("figure")
    .append("img")
    .attr("src", "../static/images/smokers-small.png")
    .attr("class", "img-fluid")
  d3.select("#smoker-pie-row")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "smoker-pie-desc")
    .html(`<strong>Smoking:</strong> Just under fifteen percent of subjects smoke.`)

  // append 2nd row to our visuals container
  d3.select("#visuals")   
    .append("div")
    .attr("class", "row")
    .attr("id", "visuals-row-2")
  // append a col-md-12 to span the entire 2nd row
  d3.select("#visuals-row-2")
    .append("div")
    .attr("id", "risk-summary-col")
    .attr("class", "col-md-12")
  d3.select("#risk-summary-col")
    .append("div")
    .attr("class", "image-wrapper float-left p-3")
    .append("img")
    .attr("src", "../static/images/cervicalrisk-small.png")
    .attr("id", "risk-pie-img")
  d3.select("#risk-summary-col")
    .append("div")
    .attr("class", "single-post-content-wrapper p-3")
    .attr("id", "risk-desc")
  d3.select("#risk-desc")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "risk-pie-desc-1")
    .html(`<strong>Risk:</strong> 12% of patients had some sort of positive result during their colposcopy and were considered to be high risk. Patients in this dataset experienced 4 different diagnostic tests as part of their colposcopy:`)  
  d3.select("#risk-desc")
    .append("ol")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "colp-list")
  d3.select("#colp-list")
    .append("li")
    .html(`<strong>Cytology</strong>: Visual inspection of cells under both green and white lights.`)
  d3.select("#colp-list")
    .append("li")
    .html(`<strong>Hinselmann Test</strong>: Acetic acid is applied to the cervix, and potentially cancerous cells turn white.`)
  d3.select("#colp-list")
    .append("li")
    .html(`<strong>Schiller Test</strong>: A solution of iodine and potassium iodide is applied to the cervix, and normal tissue appears brown while potentially cancerous cells turn white or yellow.`)
  d3.select("#colp-list")
    .append("li")
    .html(`<strong>Biopsy</strong>: A sample of potentially cancerous cells are excised for additional testing, or, if the doctor is confident of diagnosis, the entire affected region is removed.`)
  d3.select("#risk-desc")
    .append("h6")
    .attr("class", "display-5")
    .attr("id", "risk-pie-desc-1")
    .html(`For the purposes of this project, if any one of these tests was positive, we coded the patient as "high risk." Only patients with no positive tests were considered "low risk."`)  
  d3.select("#visuals")   
    .append("div")
    .attr("class", "row")
    .attr("id", "visuals-row-3")
    .append("p")
    .text("Figures on this page produced using Tableau and Matplotlib.")
}

function buildModelDev() {
  console.log("Model development build complete.")
  // Use d3 to select the visualization div
  var visualDiv = d3.select("#visualizations");

  // Use `.html("") to clear any existing metadata
  visualDiv.html("");

  d3.select("#visualizations")
    .append("div")
    .attr("id", "modelDev")
    .attr("class", "container")
  d3.select("#modelDev")   
    .append("div")
    .attr("class", "row justify-content-around")
    .attr("id", "modelDev-row-1")
  d3.select("#modelDev-row-1")
    .append("div")
    .attr("id", "desc-col")
    .attr("class", "col-md-4")
  d3.select("#desc-col")  
    .append("p")
    .attr("id", "modelDev-desc")
    .text("We input missing data using the average value of the feature, which mirrors the methodology of cervical cancer researchers who analyzed this dataset. In future research, we would opt to use more complex pre-processing schemes, such as inferring the missing value with the k-nearest neighbor model.")
  d3.select("#desc-col")  
    .append("p")
    .attr("id", "modelDev-desc")
    .text("The four target variables, which represented four different tests used to identify abnormal cells in the cervix, were combined into one target variable: cervical cancer risk. A positive result from any of these four tests resulted in the patient having risk of cervical cancer.")
  d3.select("#desc-col")  
    .append("p")
    .attr("id", "modelDev-desc")
    .text("To reduce overfitting, we identified features that were strongly correlated with each other, using tools like the heat map to the right, and dropped any unnecessary columns.")
  d3.select("#desc-col")  
    .append("p")
    .attr("id", "modelDev-desc")
    .text("We scaled all the features in the dataset using [0, 1] normalization to avoid problems related to different value ranges of each feature.")
  d3.select("#desc-col")  
    .append("p")
    .attr("id", "modelDev-desc")
    .text("We used Keras to create a sequential model with three hidden layers and our model achieved 90% accuracy.")
  d3.select("#modelDev-row-1")
    .append("div")
    .attr("id", "heat-map-col")
    .attr("class", "col-md-7 justify-content-around")
    .html(``)
  d3.select("#heat-map-col")
    .append("div")
    .attr("id", "heat-map-row-1")
    .attr("class", "row")
  d3.select("#heat-map-row-1")  
    .append("figure")
    .append("img")
    .attr("src", "../static/images/heatmap2.png")
    .attr("id", "heat-map-img")
    .attr("class", "img-fluid")
  d3.select("#heat-map-row-1")
    .append("p")
    .html(`<strong>Correlations Heat Map:</strong> We used this heat map to make the decision to drop the 'Dx', a binary variable indicating whether or not a patient had a previously diagnosed cervical cancer-related diagnosis, the category of which was encoded by columns 'Dx: Cancer', 'Dx: CIN', and 'Dx: HPV'. High correlation indicates that the same variation in the target may be explained by these variables, and including them can result in overfitting. This figure was created with Matplotlib.`)
  d3.select("#modelDev")   
    .append("div")
    .attr("class", "row")
    .attr("id", "modelDev-row-2")
  d3.select("#modelDev-row-2")
    .append("div")
    .attr("id", "bubble")
    .attr("class", "col-md-12")
    .html(`<h5>However, our model has a low recall score, which means that our model returns a high number of false negatives. We believe this score would be remedied by a larger, more robust dataset.</h5>`)
}

function buildExploreModel() {
  console.log("Explore model build complete.")
  // Use d3 to select the visualization div
  var visualDiv = d3.select("#visualizations");

  // Use `.html("") to clear any existing metadata
  visualDiv.html("");

  d3.select("#visualizations")
    .append("div")
    .attr("id", "explore-model")
    .attr("class", "container")
  d3.select("#explore-model")
    .append("select")
    .attr("id", "input-1")
  d3.select("#input-1")
    .append("option")
    .attr("value", 0)
    .text("0")
  d3.select("#input-1")
    .append("option")
    .attr("value", 1)
    .text("1")
  d3.select("#explore-model")
    .append("select")
    .attr("id", "input-2")
  d3.select("#input-2")
    .append("option")
    .attr("value", 0)
    .text("0")
  d3.select("#input-2")
    .append("option")
    .attr("value", 1)
    .text("1")
  d3.select("#explore-model")
    .append("select")
    .attr("id", "input-3")
  for (i = 0; i < 100; i++) {
    d3.select("#input-3")
      .append("option")
      .attr("value", i)
      .text(i)
  }
  d3.select("#explore-model")
    .append("input")
    .attr("type", "button")
    .attr("onclick", "getData()")
    .attr("value", "Submit")
}

function getData() {
  // var input1 = document.getElementById('input-1').value
  // var input2 = document.getElementById('input-2').value
  // var input3 = document.getElementById('input-3').value
  // var output = {"key-1": input1, "key-2": input2, "key-3": input3}
  // console.log(output)

  // d3.json("http://127.0.0.1:5000/predict", {
  //   method: 'POST',
  //   headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //   },
  //   body: JSON.stringify(output)
  // });
  // //return output
}

function buildVisual(visual) {
  console.log(`Building ${visual}...`);

  // Use d3 to select the visualization div
  var visualDiv = d3.select("#visualizations");

  // Use `.html("") to clear any existing metadata
  visualDiv.html("");

  // Call the javascript function which builds the specific visualization
  if (visual == "intro") {
    buildIntro();
  }
  
  if (visual == "rawData") {
    buildRawData();
  }
  
  if (visual == "patientData") {
    buildPatientData(firstPatient)
  }

  if (visual == "visualizations") {
    buildVisualizations()
  }
  if (visual == "modelDevelopment") {
    buildModelDev()
  }
  if (visual == "exploreModel") {
    buildExploreModel()
  }
}

function optionChanged(visual) {
  // Fetch new data each time a new sample is selected
  console.log(`Button clicked: ${visual}`);
  buildVisual(visual);
}

function patientChanged(newPatientKey) {
  // Fetch new data each time a new sample is selected
  console.log(`Patient changed: ${newPatientKey}`);
  buildPatientData(newPatientKey);
}

// Initialize the dashboard
console.log("Initializing...");
buildVisual(firstVisual);
