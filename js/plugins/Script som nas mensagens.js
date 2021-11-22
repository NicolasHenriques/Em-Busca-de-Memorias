module Raizen_Message
# Volume do Som
Volume = 80
# Arquivo que será tocado na pasta SE
Sound = "fala"
# Frequencia que será tocado o som (0 equivale a cada tecla digitada)
Freq = 3
# Switch que ativa e desativa o efeito.
Switch = 1
end

class Window_Message < Window_Base
alias :raizen_sound_message :wait_for_one_character
alias :raizen_initialize_sound initialize
  def initialize
  raizen_initialize_sound
  @charcount = 0
  end
  def wait_for_one_character
    raizen_sound_message
    if $game_switches[Raizen_Message::Switch]
    if @charcount == Raizen_Message::Freq
    RPG::SE.new(Raizen_Message::Sound, @volume = Raizen_Message::Volume).play
    @charcount = 0
    else
    @charcount += 1
    end
    end
  end
end