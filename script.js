function upDate(previewPic) {
  console.log("Mouse over image:", previewPic.alt, previewPic.src);

  // đổi background của div #image
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
  // đổi text thành alt của ảnh
  document.getElementById("image").innerHTML = previewPic.alt;
}

function undo() {
  console.log("Mouse out - restoring original");

  // khôi phục lại trạng thái ban đầu
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}