for i in `ls -l | awk '{print $NF}'`
do
	j="$(echo $i | rev | cut -c5- | rev ).mp3"
	ffmpeg -i $i -f mp3 -acodec libmp3lame -ab 192000 -ar 44100 $j
done
