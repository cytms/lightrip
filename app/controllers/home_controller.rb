class HomeController < ApplicationController
  include RestGraph::RailsUtil
  before_filter :login_facebook, :only => [:login]
  before_filter :load_facebook, :except => [:login]
  before_filter :filter_setup_rest_graph
  before_filter :filter_cache, :only => [:cache]
  def logout
    reset_session
    redirect_to home_path
  end
  def index
    @access_token = rest_graph.access_token

    if @access_token
      @me = rest_graph.get('/me')
    end
    if (params[:sid].to_i>0)
      counter = params[:sid].to_i
      @schedulereload = Schedule.find(counter).content
      puts("==================================")
      puts(params[:sid])
      @schedulereload = @schedulereload.gsub("\"","asdfdsa")
      puts(@schedulereload)
      @reload= true    
    end 
      #params[:reload]  
      #@schedule = params[:schedule]
      #@reload = params[:reload]  
    #end
    @spots=Spot.all
  end
  def attr
    respond_to do |format|
      format.html # show.html.erb
     # format.json { render json: @spot }
    end
  end

  def smart
    respond_to do |format|
      format.html # show.html.erb
     # format.json { render json: @spot }
    end
  end

  def step3
    # we will use params in the future  EX. params['attr1']

    #respond_to do |format|
    #    format.html # show.html.erb
    #    format.json { render json: @spot }
    #  end
    #end
    
     @spots = Spot.limit(2)
    #@spots = Spot.find(2)
     # @spots.each{|hashelement|
       # if(rand(2) == 1 )
        # 
          # hashelement.pop()
        # end
       # hashelement['attr1'] = 1 

     # }
    hash = {:test => "YOYO"}
    render json: @spots
  end
    def reload
    @schedule  = Schedule.find(params[:sid])
    @reload_or_not = true
    redirect_to :action => "index", :reload => @reload_or_not, :schedule=> @schedule
    #redirect_to home_path()
  end
end