require 'artoo'


#####################################################################
###################### START AND HOVER ##############################
#####################################################################

# connection :ardrone, :adaptor => :ardrone, :port => '192.168.1.1:5556'
# device :drone, :driver => :ardrone, :connection => :ardrone

# connection :navigation, :adaptor => :ardrone_navigation, :port => '192.168.1.1:5554'
# device :nav, :driver => :ardrone_navigation, :connection => :navigation

# work do
#   on nav, :update => :nav_update
#   drone.start
#   drone.take_off

#   # after(2.seconds) { drone.hover.land }
#   # after(4.seconds) { drone.stop }
# end

# def nav_update(*data)
#   data[1].drone_state.each do |name, val|
#     p "#{name}: #{val}"
#   end
# end


#####################################################################
###################### START AND HOVER ##############################
#####################################################################

work do
  on drone, :ready => :fly
  on keyboard, :key => keypress
  drone.start(nav)
  p nav
  p drone
end

def keypress (sender, key)
  p "*" * 80
  if key == "up"
    p "im here"
    drone.up
  elsif key == "q"
    drone.hover.land
    drone.stop
  elsif key == "down"
    drone.down
  end
  p key
end

def fly(*data)
  drone.take_off
  after(5.seconds) { drone.up(0.5) }
  after(7.seconds) { drone.hover }
  after(10.seconds) { drone.hover.land }
  after(14.second) { drone.hover.land }
  after(19.seconds)
  }











