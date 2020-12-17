<?php

namespace App\Http\Controllers;

use App\Models\Attribution;
use Illuminate\Http\Request;

use App\Http\Resources\Attribution as RessourceAttribution;


class AttributionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $r =  Attribution::all();

        return RessourceAttribution::collection($r);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Attribution  $attribution
     * @return \Illuminate\Http\Response
     */
    public function show(Attribution $attribution)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Attribution  $attribution
     * @return \Illuminate\Http\Response
     */
    public function edit(Attribution $attribution)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Attribution  $attribution
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Attribution $attribution)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Attribution  $attribution
     * @return \Illuminate\Http\Response
     */
    public function destroy(Attribution $attribution)
    {
        //
    }
}
