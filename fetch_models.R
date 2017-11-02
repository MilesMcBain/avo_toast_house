library(googledrive)
library(tidyverse)
library(mmmisc)

drive_download_dir(
  drive_folder = googledrive::as_id("https://drive.google.com/open?id=0B7688WPR38x2Nk5yYV9ZMVYwWVE"),
  dl_path = "./models")
