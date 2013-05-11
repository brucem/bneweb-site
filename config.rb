# Require any additional compass plugins here.
require 'compass-normalize'
require 'susy'

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

output_style = :compressed

if environment == :development
    output_style = :nested
    line_comments = true
    sass_options = { :debug_info => true }
end
