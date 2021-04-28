ic_launcher.png:
	convert launcher.png -resize 72x72 android/app/src/main/res/mipmap-hdpi/ic_launcher.png
	convert launcher.png -resize 72x72 android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png
	convert launcher.png -resize 48x48 android/app/src/main/res/mipmap-mdpi/ic_launcher.png
	convert launcher.png -resize 48x48 android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png
	convert launcher.png -resize 96x96 android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
	convert launcher.png -resize 96x96 android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png
	convert launcher.png -resize 144x144 android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
	convert launcher.png -resize 144x144 android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png
	convert launcher.png -resize 192x192 android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
	convert launcher.png -resize 192x192 android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png

.PHONY: ic_launcher.png
