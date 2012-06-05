class SchedulesController < ApplicationController
  include RestGraph::RailsUtil
  before_filter :load_facebook     

 #before_filter :filter_setup_rest_graph, :only => [:postSchedule]
  # GET /schedules
  # GET /schedules.json
  def index
    @schedules = Schedule.all
    #@friends = rest_graph.get('/me/friends') #lead to error  deleted by Peter
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @schedules }
    end
  end

  # GET /schedules/1
  # GET /schedules/1.json
  def show
    @schedule = Schedule.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @schedule }
    end
  end

  # GET /schedules/new
  # GET /schedules/new.json
  def new
    @schedule = Schedule.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @schedule }
    end
  end

  # GET /schedules/1/edit
  def edit
    @schedule = Schedule.find(params[:id])
  end

  # POST /schedules
  # POST /schedules.json
  def create
    @schedule = Schedule.new(params[:schedule])

    respond_to do |format|
      if @schedule.save
        format.html { redirect_to @schedule, notice: 'Schedule was successfully created.' }
        format.json { render json: @schedule, status: :created, location: @schedule }
      else
        format.html { render action: "new" }
        format.json { render json: @schedule.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /schedules/1
  # PUT /schedules/1.json
  def update
    @schedule = Schedule.find(params[:id])

    respond_to do |format|
      if @schedule.update_attributes(params[:schedule])
        format.html { redirect_to @schedule, notice: 'Schedule was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @schedule.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /schedules/1
  # DELETE /schedules/1.json
  def destroy
    @schedule = Schedule.find(params[:id])
    @schedule.destroy

    respond_to do |format|
      format.html { redirect_to schedules_url }
      format.json { head :no_content }
    end
  end

  # POST /save
  # POST /save.json
  def save
    @schedule = Schedule.new()
    @schedule[:user] = params[:user]
    @schedule[:schedule_name] = params[:schedule_name]
    @schedule[:content] = params[:content]
    @schedule.save

    # respond_to do |format|
      # if @schedule.save
        # format.html { redirect_to @schedule, notice: 'Schedule was successfully created.' }
        # format.json { render json: @schedule, status: :created, location: @schedule }
      # else
        # format.html { render action: "new" }
        # format.json { render json: @schedule.errors, status: :unprocessable_entity }
      # end
    # end
     render json: params
  end

  def show_user_schedule
    @schedule = Schedule.where(:user => params[:user])

    render json: @schedule
  end

def postSchedule2
    rest_graph_setup(:write_session => true)   
    unless rest_graph.access_token.nil?
      tag = params[:user]
      message = "This is a test"
      rest_graph.post('/me/feeds', :message => message)
      #rest_graph.post('me/feed', :message => "message", :picture => "http:// 
#www.dnac.org/images/Paris_Effel.jpg", :name => "name", :caption => 
#{}"caption", :description => "description", :link => "http://google.com/ 
#paris",:actions=>{"name": "View on Zombo", "link": "http://www.zombo.com"}) 
    end
       redirect_to home_path, :notice => 'Post successfully!'
  end
  def postSchedule
    rest_graph_setup(:write_session => true)   
    unless rest_graph.access_token.nil?
      place_id = "152222568167545"
      location = { :latitude => "25.019588", :longitude => "121.541722" }
      tag = params[:user]
      message = params[:description]
      rest_graph.post('/me/checkins', :place => place_id,
                                      :coordinates => location,
                                      :tags => '100000576771454', #我姊
                                      :message => message)
    end
       redirect_to home_path, :notice => 'Post successfully!'
  end
def filter_setup_rest_graph
    rest_graph_setup(:auto_authorize => true)
end
  def load_facebook
    rest_graph_setup(:write_session => true)
  end

end
