basic.showString("SARA")
for (let index = 0; index < 3; index++) {
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Heart)
    music.play(music.tonePlayable(415, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
music.play(music.tonePlayable(831, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
for (let index = 0; index < 2; index++) {
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . #
        # # # # #
        # . # . #
        # # # # #
        # . . . #
        `)
    music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        . . . . #
        `)
}
music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
for (let index = 0; index < 2; index++) {
    music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Square)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        `)
}
music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
for (let index = 0; index < 2; index++) {
    music.play(music.tonePlayable(415, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Heart)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.SmallHeart)
}
