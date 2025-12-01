-- Create table for page visits
CREATE TABLE public.page_visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  referrer TEXT
);

-- Create table for button clicks
CREATE TABLE public.button_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  button_name TEXT NOT NULL,
  button_url TEXT NOT NULL,
  clicked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.page_visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.button_clicks ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert (for tracking)
CREATE POLICY "Anyone can insert page visits" 
ON public.page_visits 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can insert button clicks" 
ON public.button_clicks 
FOR INSERT 
WITH CHECK (true);

-- Create policies to allow anyone to read (for displaying stats)
CREATE POLICY "Anyone can view page visits" 
ON public.page_visits 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view button clicks" 
ON public.button_clicks 
FOR SELECT 
USING (true);

-- Create indexes for better performance
CREATE INDEX idx_page_visits_visited_at ON public.page_visits(visited_at DESC);
CREATE INDEX idx_button_clicks_clicked_at ON public.button_clicks(clicked_at DESC);
CREATE INDEX idx_button_clicks_button_name ON public.button_clicks(button_name);