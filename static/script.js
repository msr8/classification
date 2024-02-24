/* 
dg  -> data generation
dgs -> data generation summary
dgd -> data generation dropdown
mh  -> model hyperparameters
mhs -> model hyperparameters summary
mhd -> model hyperparameters dropdown
lr  -> logistic regression
dt  -> decision tree

// const MH_COLOR = "rgba(255,100,130, {{alpha}})";
*/



// Constants
const DG_COLOR      = 'rgba(0,  255,255, {{alpha}})';
const MH_COLOR      = 'rgba(255,100,130, {{alpha}})';
// Get the value of the variable '--border-radius' in :root in style.css
const BORDER_RADIUS = getComputedStyle(document.documentElement).getPropertyValue('--border-radius');

// Elements
const dgs                      = document.getElementById('dgs');
const mhs                      = document.getElementById('mhs');
const dgd                      = document.getElementById('dgd');
const mhd                      = document.getElementById('mhd');
const dg_template              = document.getElementById('dgd-template');
const dg_noise                 = document.getElementById('dgd-noise');
const dg_factor                = document.getElementById('dgd-factor');
const dg_n_classes             = document.getElementById('dgd-n-classes');
const dg_class_sep             = document.getElementById('dgd-class-sep');
const mh_svm_degree            = document.getElementById('mhd-svm-degree');
const mh_svm_gamma             = document.getElementById('mhd-svm-gamma');
const mh_lr_l1_ratio           = document.getElementById('mhd-lr-l1-ratio');
const mh_lr_l1_ratio_float     = document.getElementById('mhd-lr-l1-ratio-float');
const mh_dt_max_depth_int      = document.getElementById('mhd-dt-max-depth-int');
const mh_dt_max_features_int   = document.getElementById('mhd-dt-max-features-int');
const mh_dt_max_features_float = document.getElementById('mhd-dt-max-features-float');

// Variables
let is_opened_dgd = false;
let is_opened_mhd = false;


// Change bg colors
dgs.style.backgroundColor = DG_COLOR.replace("{{alpha}}", "0.1");
dgd.style.backgroundColor = DG_COLOR.replace("{{alpha}}", "0.1");
mhs.style.backgroundColor = MH_COLOR.replace("{{alpha}}", "0.1");
mhd.style.backgroundColor = MH_COLOR.replace("{{alpha}}", "0.1");
// Change border radius-es
dgs.style.borderRadius            = BORDER_RADIUS;
mhs.style.borderRadius            = BORDER_RADIUS;
dgd.style.borderBottomLeftRadius  = BORDER_RADIUS;
dgd.style.borderBottomRightRadius = BORDER_RADIUS;
mhd.style.borderBottomLeftRadius  = BORDER_RADIUS;
mhd.style.borderBottomRightRadius = BORDER_RADIUS;
// Option validators
onchange_dgd_template();
onchange_mhd_svm_kernel();
onchange_mhd_svm_gamma();
onchange_mhd_lr_penalty();
onchange_mhd_lr_l1_ratio();
onchange_mhd_dt_max_depth();
onchange_mhd_dt_max_features();




// ------------------------------ dgs (data gen summary) event listeners ------------------------------
function change_dgs_color(alpha) {
    dgs.style.backgroundColor = DG_COLOR.replace("{{alpha}}", alpha.toString());
}
function onclick_dgs() {
    if (!is_opened_dgd) {
        change_dgs_color(0.3);
        dgs.style.borderBottomLeftRadius  = "0px";
        dgs.style.borderBottomRightRadius = "0px";
    } else {
        change_dgs_color(0.1);
        dgs.style.borderBottomLeftRadius  = BORDER_RADIUS;
        dgs.style.borderBottomRightRadius = BORDER_RADIUS;
    }
    is_opened_dgd = !is_opened_dgd;
}
function onmouseover_dgs() {change_dgs_color(0.3);}
function onmouseout_dgs() {
    // If the dgd is opened, then don't change the color
    if (!is_opened_dgd) {change_dgs_color(0.1);}
}




// ------------------------------ mhs (models hyperparameters summary) event listeners ------------------------------
function change_mhs_color(alpha) {
    mhs.style.backgroundColor = MH_COLOR.replace("{{alpha}}", alpha.toString());
}
function onclick_mhs() {
    if (!is_opened_mhd) {
        change_mhs_color(0.3);
        mhs.style.borderBottomLeftRadius  = "0px";
        mhs.style.borderBottomRightRadius = "0px";
    } else {
        change_mhs_color(0.1);
        mhs.style.borderBottomLeftRadius  = BORDER_RADIUS;
        mhs.style.borderBottomRightRadius = BORDER_RADIUS;
    }
    is_opened_mhd = !is_opened_mhd;
}
function onmouseover_mhs() {change_mhs_color(0.3);}
function onmouseout_mhs() {
    // If the mhd is opened, then don't change the color
    if (!is_opened_mhd) {change_mhs_color(0.1);}
}




// ------------------------------ dgd input event listeners ------------------------------
function onchange_dgd_template() {
    let template = document.getElementById("dgd-template-input").value;
    console.log(`Changing template to ${template}`)

    if (template == 'make_moons') {
        dg_noise.style.display     = '';
        dg_factor.style.display    = 'none';
        dg_n_classes.style.display = 'none';
        dg_class_sep.style.display = 'none';
    }
    else if (template == 'make_circles') {
        dg_noise.style.display     = '';
        dg_factor.style.display    = '';
        dg_n_classes.style.display = 'none';
        dg_class_sep.style.display = 'none';
    }
    else if (template == 'make_classification') {
        dg_noise.style.display     = 'none';
        dg_factor.style.display    = 'none';
        dg_n_classes.style.display = '';
        dg_class_sep.style.display = '';
    }
    else {
        console.error(`Unknown template: ${template}`);
        alert(`Unknown template: ${template}`);
    }
}




// ------------------------------ mhd input event listeners ------------------------------
function onchange_dgd_template() {
    let template = document.getElementById("dgd-template-input").value;
    console.log(`Changing template to ${template}`)

    if (template == 'make_moons') {
        dg_noise.style.display     = '';
        dg_factor.style.display    = 'none';
        dg_n_classes.style.display = 'none';
        dg_class_sep.style.display = 'none';
    }
    else if (template == 'make_circles') {
        dg_noise.style.display     = '';
        dg_factor.style.display    = '';
        dg_n_classes.style.display = 'none';
        dg_class_sep.style.display = 'none';
    }
    else if (template == 'make_classification') {
        dg_noise.style.display     = 'none';
        dg_factor.style.display    = 'none';
        dg_n_classes.style.display = '';
        dg_class_sep.style.display = '';
    }
    else {
        console.error(`Unknown template: ${template}`);
        alert(`Unknown template: ${template}`);
    }
}

function onchange_mhd_svm_kernel() {
    let kernel = document.getElementById('mhd-svm-kernel-input').value;
    console.log(`[SVM] Changing kernel to ${kernel}`);

    if (kernel == 'linear') {
        mh_svm_degree.style.display = 'none';
        mh_svm_gamma.style.display  = 'none';
    }
    else if (kernel == 'poly') {
        mh_svm_degree.style.display = '';
        mh_svm_gamma.style.display  = '';
    }
    else if (kernel == 'rbf' || kernel == 'sigmoid') {
        mh_svm_degree.style.display = 'none';
        mh_svm_gamma.style.display  = '';
    }
    else {
        console.error(`Unknown kernel: ${kernel}`);
        alert(`Unknown kernel: ${kernel}`);
    }
}

function onchange_mhd_svm_gamma() {
    let value = document.getElementById('mhd-svm-gamma-input').value;
    console.log(`[SVM] Changing gamma to ${value}`);
    
    document.getElementById('mhd-svm-gamma-float').style.display = value=='float' ? 'inline' : 'none';
}

function onchange_mhd_lr_penalty() {
    let penalty = document.getElementById('mhd-lr-penalty-input').value;
    console.log(`[LR] Changing penalty to ${penalty}`);
    
    document.getElementById('mhd-lr-l1-ratio').style.display = penalty=='elasticnet' ? '' : 'none';
}

function onchange_mhd_lr_l1_ratio() {
    let value = document.getElementById('mhd-lr-l1-ratio-input').value;
    console.log(`[LR] Changing l1_ratio to ${value}`);
    
    document.getElementById('mhd-lr-l1-ratio-float').style.display = value=='float' ? 'inline' : 'none';
}

function onchange_mhd_dt_max_depth() {
    let value = document.getElementById('mhd-dt-max-depth-input').value;
    console.log(`[DT] Changing max_depth to ${value}`);

    document.getElementById('mhd-dt-max-depth-int').style.display = value=='integer' ? 'inline' : 'none';
}

function onchange_mhd_dt_max_features() {
    let value = document.getElementById('mhd-dt-max-features-input').value;
    console.log(`[DT] Changing max_features to ${value}`);

    document.getElementById('mhd-dt-max-features-int').style.display   = value=='integer' ? 'inline' : 'none';
    document.getElementById('mhd-dt-max-features-float').style.display = value=='float'   ? 'inline' : 'none';
}