<?php
class Foo
{
	

	
	public function test()
	{
	
	echo 'this is Parent Class method';
	}
	
}
Class F extends Foo{
	public function test(){
		echo 'this is Child Class Method';
	}
}


$obj = new F;
$obj->test();



//var_dump(Foo::$foo);
asdfasdfasdf

?>